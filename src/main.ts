import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from '@/store'
// @ts-ignore
import vClickOutside from 'click-outside-vue3'


createApp(App)
    .use(vClickOutside)
    .use(store)
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')
