import Vue from 'vue';
import VueRouter from 'vue-router';
import Vant from 'vant';

import App from './App.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

import 'vant/lib/index.css';

Vue.use(Vant);

import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Enter from "@/components/Enter";

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/chat',
            name: 'chat',
            component: Chat,
        },
        {
            path: '/enter',
            name: 'enter',
            component: Enter,
            props: true
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
