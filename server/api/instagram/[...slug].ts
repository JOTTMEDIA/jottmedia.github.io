import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import {createRouter, defineEventHandler, useBase} from 'h3'

interface InstagramPosts {
  id: string
  media_url?: string
  link?: string
}

const router = createRouter()
router.get('/feed', defineEventHandler(async (event) => {

  const keyWord = "";

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://browserless-production-3178.up.railway.app`,
  });
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/");

  const data = await page.evaluate((keyWord) => {
    let $$news = [...document.querySelectorAll(".athing")].filter((elem) =>
      elem.querySelector(".votearrow")
    );

    if (keyWord) {
      $$news = $$news.filter(($news: any) =>
        $news
          .querySelector(".titleline")!
          .innerText.toLowerCase()
          .includes(keyWord)
      );
    }

    return $$news.map((elem: any) => {
      const $info = elem.nextElementSibling;

      return {
        title: elem.querySelector(".titleline")!.innerText,
        url: elem.querySelector(".titleline a")!.href,
        score: parseInt($info!.querySelector(".score")!.innerText),
        date: $info!.querySelector("span.age")!.title,
        by: $info!.querySelector(".hnuser")!.innerText,
      };
    });
  }, keyWord);

  return { data };

  // puppeteer load instagram page
  // const browser = await puppeteer.connect({
  //   browserWSEndpoint: `wss://chrome.browserless.io`,
  // });
  // const instagramPage = await browser.newPage();
  // await instagramPage.goto('https://www.instagram.com/jott.media/');
  // await instagramPage.waitForSelector('article');
  // const body = await instagramPage.evaluate(() => document.body.innerHTML);
  // await browser.close()
  //
  // console.log(body);
  //
  // const $ = cheerio.load(body);
  // const posts  = <InstagramPosts[]>[];
  //
  // console.log($.html());
  //
  // $('article').each(function (i, post){
  //   if( i > 4 ) return;
  //
  //   posts.push({
  //     id: i.toString(),
  //     media_url: $(this).find('img').attr('src'),
  //     link: $(this).find('a').attr('href')
  //   });
  // });
  //
  // try {
  //   return posts;
  // } catch (e) {
  //   throw createError(e ?? 'Something went wrong');
  // }
}));

export default useBase('/api/instagram', router.handler)