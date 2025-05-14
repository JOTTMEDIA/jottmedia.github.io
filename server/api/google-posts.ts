import {DOMParser} from 'xmldom';

export default defineEventHandler(async () => {
    const feedUrl = 'https://zapier.com/engine/rss/13408009/google-local-posts';

    try {
        const xmlData = await $fetch(feedUrl, {responseType: 'text'});

        console.log('XML-Daten:', xmlData);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        const items = Array.from(xmlDoc.getElementsByTagName('item')).map(item => {
            const descriptionElement = item.getElementsByTagName('description')[0];
            const linkElement = item.getElementsByTagName('link')[0];
            const pubDateElement = item.getElementsByTagName('pubDate')[0];

            const descriptionHtml = descriptionElement?.textContent || '';
            const link = linkElement?.textContent || '';
            const pubDate = pubDateElement?.textContent || '';

            const tempDoc = parser.parseFromString(descriptionHtml, 'text/html');
            const firstStrong = tempDoc.getElementsByTagName('strong')[0]?.textContent?.trim();

            const plainText = tempDoc.documentElement.textContent?.trim() || '';
            const fallbackTitle = plainText.split('\n').find(line => line.trim()) || 'Untitled';

            const title = firstStrong || fallbackTitle;

            return {
                title,
                link,
                pubDate,
                descriptionHtml
            };
        });

        return {posts: items};
    } catch (error) {
        console.error('RSS Fehler:', (error as Error).message);
        throw createError({statusCode: 500, statusMessage: 'RSS-Feed Fehler'});
    }
});