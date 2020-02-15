import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1edcb66a = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages_About" */))
const _040ec634 = () => interopDefault(import('..\\pages\\agregar\\index.vue' /* webpackChunkName: "pages_agregar_index" */))
const _ecfe239e = () => interopDefault(import('..\\pages\\alex.vue' /* webpackChunkName: "pages_alex" */))
const _2ad0ed2d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _03eb3840 = () => interopDefault(import('..\\pages\\contacto\\index.vue' /* webpackChunkName: "pages_contacto_index" */))
const _61e7f9dc = () => interopDefault(import('..\\pages\\Curs\\index.vue' /* webpackChunkName: "pages_Curs_index" */))
const _59feee34 = () => interopDefault(import('..\\pages\\editar\\index.vue' /* webpackChunkName: "pages_editar_index" */))
const _7716f64e = () => interopDefault(import('..\\pages\\Ingreso.vue' /* webpackChunkName: "pages_Ingreso" */))
const _b6c09790 = () => interopDefault(import('..\\pages\\inicio.vue' /* webpackChunkName: "pages_inicio" */))
const _08775217 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _58480eb2 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _2a5cf066 = () => interopDefault(import('..\\pages\\Registro.vue' /* webpackChunkName: "pages_Registro" */))
const _526f0b1d = () => interopDefault(import('..\\pages\\vuex\\index.vue' /* webpackChunkName: "pages_vuex_index" */))
const _0bbb5256 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages_blog__id" */))
const _a08bc134 = () => interopDefault(import('..\\pages\\editar\\_id\\index.vue' /* webpackChunkName: "pages_editar__id_index" */))
const _adb0c4b0 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */))
const _498f30c5 = () => interopDefault(import('..\\pages\\vuex\\_id.vue' /* webpackChunkName: "pages_vuex__id" */))
const _71bb1d62 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _1edcb66a,
    name: "About"
  }, {
    path: "/agregar",
    component: _040ec634,
    name: "agregar"
  }, {
    path: "/alex",
    component: _ecfe239e,
    name: "alex"
  }, {
    path: "/blog",
    component: _2ad0ed2d,
    name: "blog"
  }, {
    path: "/contacto",
    component: _03eb3840,
    name: "contacto"
  }, {
    path: "/Curs",
    component: _61e7f9dc,
    name: "Curs"
  }, {
    path: "/editar",
    component: _59feee34,
    name: "editar"
  }, {
    path: "/Ingreso",
    component: _7716f64e,
    name: "Ingreso"
  }, {
    path: "/inicio",
    component: _b6c09790,
    name: "inicio"
  }, {
    path: "/inspire",
    component: _08775217,
    name: "inspire"
  }, {
    path: "/posts",
    component: _58480eb2,
    name: "posts"
  }, {
    path: "/Registro",
    component: _2a5cf066,
    name: "Registro"
  }, {
    path: "/vuex",
    component: _526f0b1d,
    name: "vuex"
  }, {
    path: "/blog/:id",
    component: _0bbb5256,
    name: "blog-id"
  }, {
    path: "/editar/:id",
    component: _a08bc134,
    name: "editar-id"
  }, {
    path: "/posts/:id",
    component: _adb0c4b0,
    name: "posts-id"
  }, {
    path: "/vuex/:id",
    component: _498f30c5,
    name: "vuex-id"
  }, {
    path: "/",
    component: _71bb1d62,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
