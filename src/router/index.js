import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';
import SignView from '../views/SignView.vue';
import VoteView from '../views/VoteView.vue';
import MyProfileView from '../views/MyProfileView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vote',
    name: 'vote',
		component: VoteView 
  },
  {
    path: '/profile',
    name: 'profile',
		component: MyProfileView 
  },
  {
    path: '/signIn',
    name: 'signIn',
		component: SignView 
  }
];

const router = new VueRouter({
  routes
})

export default router
