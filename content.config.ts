import {defineCollection, defineContentConfig, z} from '@nuxt/content'

const commonSchema = z.object({})

export default defineContentConfig({
    collections: {
        team_en: defineCollection({
            type: 'page',
            source: {
                include: 'en/team/**',
                prefix: '',
            },
            schema: commonSchema,
        }),
        team_de: defineCollection({
            type: 'page',
            source: {
                include: 'de/team/**',
                prefix: '',
            },
            schema: commonSchema,
        }),
        articles_en: defineCollection({
            type: 'page',
            source: {
                include: 'en/blog/**',
                prefix: '',
            },
            schema: commonSchema,
        }),
        articles_de: defineCollection({
            type: 'page',
            source: {
                include: 'de/blog/**',
                prefix: '',
            },
            schema: commonSchema,
        }),

    },
})