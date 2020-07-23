import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import {MdButton, MdCard, MdContent, MdField, MdLayout, MdList, MdTable, MdTabs} from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'


import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import NewDress from "@/components/NewDress";
import Admin from "@/components/Admin";
import Login from "@/components/Login";
import VueRouter from "vue-router";

Vue.config.productionTip = false

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdCard);
Vue.use(MdLayout);
Vue.use(MdList);
Vue.use(MdTable);

Vue.use(VueRouter);

const routers = [
    {
        path: '/home',
        name: Home,
        component: Home
    },
    {path: '/menu', component: Menu},
    {path: '/contact', component: Contact},
    {path: '/about', component: AboutUs},
    {path: '/admin', component: Admin},
    {path: '/login', component: Login},
    {path: '/newDress', component: NewDress}

];


const router = new VueRouter({

    routes: routers,
    mode: 'history'
});


Vue.use(MdField);
Vue.use(VueMaterial);
new Vue({
    router,
  ...App
}).$mount('#app')
