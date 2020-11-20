import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f91e0d42 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _9a360dce = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _4ade80e7 = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _54de04c0 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _6db611e8 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _1733df92 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _f6733f54 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _f406e02a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _206341f0 = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _3c6b18a3 = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _402006d6 = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _8bbf3234 = () => interopDefault(import('..\\pages\\supermash.vue' /* webpackChunkName: "pages/supermash" */))
const _5664cffa = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _6305de89 = () => interopDefault(import('..\\pages\\Postagem\\AOC.vue' /* webpackChunkName: "pages/Postagem/AOC" */))
const _94b1544e = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _c5c63222 = () => interopDefault(import('..\\pages\\Postagem\\Cyberpunk.vue' /* webpackChunkName: "pages/Postagem/Cyberpunk" */))
const _6c9c0f16 = () => interopDefault(import('..\\pages\\Postagem\\Lancamento.vue' /* webpackChunkName: "pages/Postagem/Lancamento" */))
const _1c6347a6 = () => interopDefault(import('..\\pages\\Postagem\\Netflix.vue' /* webpackChunkName: "pages/Postagem/Netflix" */))
const _71586867 = () => interopDefault(import('..\\pages\\Postagem\\Pokemon.vue' /* webpackChunkName: "pages/Postagem/Pokemon" */))
const _3ee0c315 = () => interopDefault(import('..\\pages\\PostagemSony\\Descontos.vue' /* webpackChunkName: "pages/PostagemSony/Descontos" */))
const _2a42edb7 = () => interopDefault(import('..\\pages\\PostagemSony\\Genshin.vue' /* webpackChunkName: "pages/PostagemSony/Genshin" */))
const _b1f91c10 = () => interopDefault(import('..\\pages\\PostagemSony\\Kingdom.vue' /* webpackChunkName: "pages/PostagemSony/Kingdom" */))
const _b2a567f2 = () => interopDefault(import('..\\pages\\PostagemSony\\Monster.vue' /* webpackChunkName: "pages/PostagemSony/Monster" */))
const _95a1f7c0 = () => interopDefault(import('..\\pages\\PostagemSony\\StarWars.vue' /* webpackChunkName: "pages/PostagemSony/StarWars" */))
const _9f0346c8 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _87562658 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/control",
    component: _f91e0d42,
    name: "control"
  }, {
    path: "/desconto",
    component: _9a360dce,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _4ade80e7,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _54de04c0,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _6db611e8,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _1733df92,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _f6733f54,
    name: "logado"
  }, {
    path: "/login",
    component: _f406e02a,
    name: "login"
  }, {
    path: "/microsoft",
    component: _206341f0,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _3c6b18a3,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _402006d6,
    name: "sony"
  }, {
    path: "/supermash",
    component: _8bbf3234,
    name: "supermash"
  }, {
    path: "/trabalhe-conosco",
    component: _5664cffa,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/AOC",
    component: _6305de89,
    name: "Postagem-AOC"
  }, {
    path: "/Postagem/Coringa",
    component: _94b1544e,
    name: "Postagem-Coringa"
  }, {
    path: "/Postagem/Cyberpunk",
    component: _c5c63222,
    name: "Postagem-Cyberpunk"
  }, {
    path: "/Postagem/Lancamento",
    component: _6c9c0f16,
    name: "Postagem-Lancamento"
  }, {
    path: "/Postagem/Netflix",
    component: _1c6347a6,
    name: "Postagem-Netflix"
  }, {
    path: "/Postagem/Pokemon",
    component: _71586867,
    name: "Postagem-Pokemon"
  }, {
    path: "/PostagemSony/Descontos",
    component: _3ee0c315,
    name: "PostagemSony-Descontos"
  }, {
    path: "/PostagemSony/Genshin",
    component: _2a42edb7,
    name: "PostagemSony-Genshin"
  }, {
    path: "/PostagemSony/Kingdom",
    component: _b1f91c10,
    name: "PostagemSony-Kingdom"
  }, {
    path: "/PostagemSony/Monster",
    component: _b2a567f2,
    name: "PostagemSony-Monster"
  }, {
    path: "/PostagemSony/StarWars",
    component: _95a1f7c0,
    name: "PostagemSony-StarWars"
  }, {
    path: "/post/:id?",
    component: _9f0346c8,
    name: "post-id"
  }, {
    path: "/",
    component: _87562658,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
