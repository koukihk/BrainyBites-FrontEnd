import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/IndexView'
import SearchView from '../views/SearchView'
import ArticleView from "../views/ArticleView"
import SelfView from '../views/SelfView'
import PortView from "../views/PortView";
import EditView from "../views/EditView";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/search/:key',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/article/:artId',
    name: 'ArticleView',
    component: ArticleView
  },
  {
    path: '/self/:cusId',
    name: 'SelfView',
    component: SelfView
  },
  {
    path: '/port',
    name: 'PortView',
    component: PortView
  },
  {
    path: '/edit',
    name: 'EditView',
    component: EditView
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
