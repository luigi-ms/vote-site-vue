import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';
import VoteView from '../views/VoteView.vue';
import CandidateView from '../views/CandidateView.vue';

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
    path: '/profile/candidate',
    name: 'profileCand',
		component: CandidateView 
  },
  {
    path: '/signIn',
    name: 'signIn',
		component: SignInView 
  },
  {
    path: '/signUp',
    name: 'signUp',
		component: SignUpView 
  }
];

const router = new VueRouter({
  routes
})

export default router
