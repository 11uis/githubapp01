import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

// Install Axios
import Axios from 'axios';
// make the URL global (remember, here is where you have all the dependencies
// form 1: the URL will be used by the method fetchUser in the App.vue
//Axios.defaults.baseURL = 'https://api.github.com/';
// form 2: make a variable with the URL in the production environment
// prod.env.js file in the config folder, and use it
Axios.defaults.baseURL = process.env.API_LOCATION;
// copy the git API url and give it to Axios: application/vnd.github.v3+json
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

// bind it to our components
// form 1: sets the prototype regardles
// Vue.prototype.$http = Axios;
// form 2: make sure you define the property
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});


import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});

import './assets/sass/app.css';

export default {
  router,
};
