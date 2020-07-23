import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import {MdButton, MdCard, MdContent, MdField, MdLayout, MdList, MdTable, MdTabs} from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'
import {routers} from "./routers";

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




const router = new VueRouter({

    routes: routers,
    mode: 'history',
    scrollBehavior(to, form, savedPosition) {

    if(savedPosition)
    {
        return savedPosition
    }
    else {
        return {x:0,y:0}
    }
    }
});


Vue.use(MdField);
Vue.use(VueMaterial);
new Vue({
    router,
    ...App
}).$mount('#app')
