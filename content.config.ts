import {defineCollection, defineContentConfig} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        team: defineCollection({
            type: 'page',
            source: 'team/**.md',
        })
    }
})