import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "datasaham",
            component: () => import("./components/datasaham"),
        },
        {
            path: "/bbribid",
            name: "datasaham",
            component: () => import("./components/datasaham"),
        },
        {
            path: "/bbrioffer",
            name: "datasaham",
            component: () => import("./components/datasaham"),
        },
    ]
});

export default router;
