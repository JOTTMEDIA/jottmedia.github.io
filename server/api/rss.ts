export default defineEventHandler(async () => {
    const feedUrl = 'https://zapier.com/engine/rss/13408009/google-local-posts';

    try {
        const xmlData = await $fetch<string>(feedUrl, {responseType: 'text'});

        const itemMatches = [...xmlData.matchAll(/<item>([\s\S]*?)<\/item>/g)];

        const items = itemMatches.map(match => {
            const itemXml = match[1];

            const getTagContent = (tag: string) => {
                const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
                const res = itemXml.match(regex);
                return res ? res[1].trim() : '';
            };
            const getEnclosureUrl = () => {
                const enclosureMatch = itemXml.match(/<enclosure[^>]*url="([^"]+)"[^>]*\/>/);
                return enclosureMatch ? enclosureMatch[1] : '';
            };

            const descriptionHtml = getTagContent('description');
            const link = getTagContent('link').replace(/&amp;/g, '&');
            const pubDate = getTagContent('pubDate');
            const enclosureUrl = getEnclosureUrl();

            const strongMatch = descriptionHtml.match(/<strong>(.*?)<\/strong>/);
            const plainText = descriptionHtml.replace(/<[^>]+>/g, '').trim();

            const title = strongMatch ? strongMatch[1].trim() : plainText.split('\n').find(l => l.trim()) || 'Untitled';

            return {
                title,
                link,
                pubDate,
                image: enclosureUrl,
                descriptionHtml
            };
        });

        return {posts: items};
    } catch (error) {
        console.error('RSS Fehler:', error instanceof Error ? error.message : 'Unbekannter Fehler');
        throw createError({statusCode: 500, statusMessage: 'RSS-Feed Fehler'});
    }
});