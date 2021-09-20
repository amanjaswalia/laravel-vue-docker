import Vue from 'vue';
import Router from 'vue-router';

/*Front Page*/
import AboutUsPage from '../pages/about-us'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { name: 'home',path: '/', component: AboutUsPage, meta: { title: 'Home' }},
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
})