import {defineCollection, defineContentConfig} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/**.md',
        }),
        team: defineCollection({
            type: 'page',
            source: 'team/**.md',
        })
    }
})