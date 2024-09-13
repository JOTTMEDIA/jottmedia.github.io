import puppeteer from 'puppeteer-core';

import {createRouter, defineEventHandler, useBase} from 'h3'

interface InstagramPosts {
  url?: string
  photo?: string | null
}

const router = createRouter()
router.get('/user', defineEventHandler( async (event) => {
  let launchOptions = {
    browserWSEndpoint: 'wss://browserless-production-634.up.railway.app?stealth&proxy=residential'
  };

  const browser = await puppeteer.connect(launchOptions);
  const page = await browser.newPage();

  await page.setViewport({width: 1200, height: 700});
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
  await page.goto('https://www.instagram.com/jott.media/');

  // const base64 = await page.screenshot({ encoding: "base64" })
  //
  // await browser.close();
  // return base64;

  // page.on('console', msg => {
  //   for (let i = 0; i < msg.args().length; ++i)
  // });

  // let sharedData = await page.evaluate(() => {
  //   return window._sharedData.entry_data.ProfilePage[0].graphql.user;
  // });

  let isUsernameNotFound = await page.evaluate(() => {
    if(document.getElementsByTagName('h2')[0]) {
      if(document.getElementsByTagName('h2')[0].textContent == "Sorry, this page isn't available.") {
        return true;
      }
    }
  });

  if(isUsernameNotFound) {
    await browser.close();
    return;
  }

  let username = await page.evaluate(() => {
    return document.querySelectorAll('header > section h1')[0]?.textContent;
  });

  let isVerifiedAccount = await page.evaluate(() => {
    return !!document.getElementsByClassName('coreSpriteVerifiedBadge')[0];
  });

  let usernamePictureUrl = await page.evaluate(() => {
    return document.querySelectorAll('header img')[0]?.getAttribute('src');
  });

  let postsCount = await page.evaluate(() => {
    return document.querySelectorAll('header > section > ul > li span')[0]?.textContent?.replace(/,/g, '');
  });

  let followersCount = await page.evaluate(() => {
    return document.querySelectorAll('header > section > ul > li span')[1]?.getAttribute('title')?.replace(/,/g, '');
  });

  let followingsCount = await page.evaluate(() => {
    return document.querySelectorAll('header > section > ul > li span')[2]?.textContent?.replace(/,/g, '');
  });

  let name = await page.evaluate(() => {
    if(document.querySelectorAll('header > section h1')[1]) {
      return document.querySelectorAll('header > section h1')[1].textContent;
    } else {
      return '';
    }
  });

  let bio = await page.evaluate(() => {
    if(document.querySelectorAll('header h1')[1]?.parentNode?.querySelectorAll('span')[0]) {
      return document.querySelectorAll('header h1')[1]?.parentNode?.querySelectorAll('span')[0].textContent;
    } else {
      return '';
    }
  });

  let bioUrl = await page.evaluate(() => {
    if(document.querySelectorAll('header > section div > a')[1]) {
      return document.querySelectorAll('header > section div > a')[1].getAttribute('href');
    } else {
      return '';
    }
  });

  let bioUrlDisplay = await page.evaluate(() => {
    if(document.querySelectorAll('header > section div > a')[1]) {
      return document.querySelectorAll('header > section div > a')[1].textContent;
    } else {
      return '';
    }
  });

  let isPrivateAccount = await page.evaluate(() => {
    if(document.getElementsByTagName('h2')[0]) {
      return document.getElementsByTagName('h2')[0].textContent == 'This Account is Private';
    } else {
      return false;
    }
  });

  let recentPosts = await page.evaluate(() => {
    let results : InstagramPosts[] = [];

    document.querySelectorAll('div[style*="flex-direction"] div > a').forEach((el) => {
      let post : InstagramPosts = {};

      post.url = 'https://www.instagram.com' + el.getAttribute('href');
      post.photo = el.querySelector('img')?.getAttribute('src');

      results.push(post);
    });

    return results;
  });

  let result = {
    'username': username ?? null,
    'is_verified_account': isVerifiedAccount ?? null,
    'username_picture_url': usernamePictureUrl ?? null,
    'posts_count': postsCount ?? null,
    'followers_count': followersCount ?? null,
    'followings_count': followingsCount ?? null,
    'name': name ?? null,
    'bio': bio ?? null,
    'bio_url': bioUrl ?? null,
    'bio_url_display': bioUrlDisplay ?? null,
    'is_private_account': isPrivateAccount ?? null,
    'recent_posts': recentPosts ?? null
  }

  await browser.close();
  return result;
}));

export default useBase('/api/instagram', router.handler)
