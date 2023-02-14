import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/IndexView'
import SearchView from '../views/SearchView'
import ArticleView from "../views/ArticleView"
import SelfView from '../views/SelfView'
import PortView from "../views/PortView";
import EditView from "../views/EditView";
import AboutView from "../views/AboutView";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PortViewBase',
    component: PortView,
    meta: { title: "认证 | Brainy Bites" }
  },
  {
    path: '/index',
    name: 'IndexView',
    component: IndexView,
    meta: { title: "首页 | Brainy Bites" }
  },
  {
    path: '/search/:key',
    name: 'SearchView',
    component: SearchView,
    meta: { title: "搜索 | Brainy Bites" }
  },
  {
    path: '/article/:artId',
    name: 'ArticleView',
    component: ArticleView,
    meta: { title: "文章 | Brainy Bites" }
  },
  {
    path: '/self/:cusId',
    name: 'SelfView',
    component: SelfView,
    meta: { title: "用户 | Brainy Bites" }
  },
  {
    path: '/port',
    name: 'PortView',
    component: PortView,
    meta: { title: "认证 | Brainy Bites" }
  },
  {
    path: '/edit',
    name: 'EditView',
    component: EditView,
    meta: { title: "编辑 | Brainy Bites" }
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
    meta: { title: "关于 | Brainy Bites" }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach( (to) => {
  document.title = to.meta.title
})

export default router
