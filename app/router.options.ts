import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
   async scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // scroll to saved position
        }
    }
};