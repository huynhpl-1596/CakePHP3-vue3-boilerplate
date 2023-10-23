import * as Vue from 'vue';
import { createApp } from 'vue'
import axios from 'axios';
import App from './components/App.vue';
import router from './router';

// window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.Vue = Vue;

createApp(App).use(router).mount('#app')
