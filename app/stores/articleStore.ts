import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
    state: () => ({
        articles: [],
        page: 1,
        pageMaxArticles: 6,
        categories: [] as string[],
        selectedCategory: ''
    }),
    getters: {
        filteredArticles: (state) => {
            if (!state.selectedCategory) return state.articles;
            return state.articles?.filter(article =>
                (article.meta.categories as string[]).includes(state.selectedCategory)
            );
        },
        loadMoreButtonLabel: (state) => {
            return state.articles?.length < state.pageMaxArticles ? 'Keine weiteren Beiträge' : 'Mehr Anzeigen';
        }
    },
    actions: {
        async fetchArticles() {
            const { data } = await useAsyncData('blog', () =>
                queryCollection('blog')
                    .limit(this.pageMaxArticles)
                    .skip(this.pageMaxArticles * (this.page - 1))
                    .order('id', 'DESC')
                    .all())

            this.articles = data.value || []
            this.fetchCategories()
        },

        async loadMorePosts() {
            this.pageMaxArticles += 6
            const { data } = await useAsyncData('blog', () =>
                queryCollection('blog')
                    .order('id', 'DESC')
                    .limit(this.pageMaxArticles)
                    .all()
            )
            this.articles = data.value || []
            this.fetchCategories()
        },

        fetchCategories() {
            this.categories = this.articles?.map(item => item.meta.categories)
                .flat()
                .filter((item, index, self) => self.indexOf(item) === index) || []
        },

        setSelectedCategory(category: string) {
            this.selectedCategory = category
        },

        truncateText(text: string, maxLength: number) {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            }
            return text;
        }
    }
})