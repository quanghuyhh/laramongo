import { createApp } from 'vue';
import store from './vue/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './vue/pages/App.vue';
import router from './vue/configs/router';
import {BASE_API} from './vue/configs/base'

axios.defaults.baseURL = BASE_API;

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('access_token');
axios.defaults.headers.common['Accept'] = 'application/json';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .mount("#app");