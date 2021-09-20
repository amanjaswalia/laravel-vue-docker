import Vue from 'vue';
console.log('Inside1111');
import  BootstrapVue  from 'bootstrap-vue';

import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import { router } from './_helpers';
import App from './app/App';

Vue.use(BootstrapVue);
console.log('Inside');

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});