import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import {MdButton, MdCard, MdContent, MdField, MdTabs ,MdLayout,MdList,MdTable} from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdCard);
Vue.use(MdLayout);
Vue.use(MdList);
Vue.use(MdTable);



Vue.use(MdField);
Vue.use(VueMaterial)
new Vue({
  render: h => h(App),
}).$mount('#app')
