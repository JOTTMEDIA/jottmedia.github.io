import type {RouterConfig} from "@nuxt/schema";

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.path.startsWith('/blog/')) {
            return {top: 0};
        } else if (to.path.startsWith('/blog')) {
            return {top: 0};
        }
    },
};