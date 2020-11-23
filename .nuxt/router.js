import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3114d062 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _0c4e992d = () => interopDefault(import('..\\pages\\criar-post.vue' /* webpackChunkName: "pages/criar-post" */))
const _8c87fb14 = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _dbb0d878 = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _7b368b86 = () => interopDefault(import('..\\pages\\filmes.vue' /* webpackChunkName: "pages/filmes" */))
const _76c8ce0f = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _231ea48c = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _719a1cf3 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _e4bf68a4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1725379a = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _43422200 = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _74d43c72 = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _e3aaedae = () => interopDefault(import('..\\pages\\supermash.vue' /* webpackChunkName: "pages/supermash" */))
const _4a01a752 = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _04df274c = () => interopDefault(import('..\\pages\\Postagem\\AOC.vue' /* webpackChunkName: "pages/Postagem/AOC" */))
const _774ef5c8 = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _77815d1c = () => interopDefault(import('..\\pages\\Postagem\\Cyberpunk.vue' /* webpackChunkName: "pages/Postagem/Cyberpunk" */))
const _29c6f4f3 = () => interopDefault(import('..\\pages\\Postagem\\Lancamento.vue' /* webpackChunkName: "pages/Postagem/Lancamento" */))
const _2b1476e9 = () => interopDefault(import('..\\pages\\Postagem\\Netflix.vue' /* webpackChunkName: "pages/Postagem/Netflix" */))
const _ffecd0ac = () => interopDefault(import('..\\pages\\Postagem\\Pokemon.vue' /* webpackChunkName: "pages/Postagem/Pokemon" */))
const _e3324c3e = () => interopDefault(import('..\\pages\\postagemMicrosoft\\halo.vue' /* webpackChunkName: "pages/postagemMicrosoft/halo" */))
const _3d91dc59 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\needforspeed.vue' /* webpackChunkName: "pages/postagemMicrosoft/needforspeed" */))
const _7d808e1b = () => interopDefault(import('..\\pages\\postagemMicrosoft\\overwatchdois.vue' /* webpackChunkName: "pages/postagemMicrosoft/overwatchdois" */))
const _14ded462 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\seriexs.vue' /* webpackChunkName: "pages/postagemMicrosoft/seriexs" */))
const _71222b83 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\valhallavendas.vue' /* webpackChunkName: "pages/postagemMicrosoft/valhallavendas" */))
const _6c64f82c = () => interopDefault(import('..\\pages\\postagemNintendo\\animalcrossing.vue' /* webpackChunkName: "pages/postagemNintendo/animalcrossing" */))
const _f152a544 = () => interopDefault(import('..\\pages\\postagemNintendo\\fireemblem.vue' /* webpackChunkName: "pages/postagemNintendo/fireemblem" */))
const _c534933e = () => interopDefault(import('..\\pages\\postagemNintendo\\ghostrunner.vue' /* webpackChunkName: "pages/postagemNintendo/ghostrunner" */))
const _3a55bbe6 = () => interopDefault(import('..\\pages\\postagemNintendo\\mario.vue' /* webpackChunkName: "pages/postagemNintendo/mario" */))
const _68a19acc = () => interopDefault(import('..\\pages\\postagemNintendo\\nintendovendas.vue' /* webpackChunkName: "pages/postagemNintendo/nintendovendas" */))
const _403ade0e = () => interopDefault(import('..\\pages\\postagemNintendo\\temtem.vue' /* webpackChunkName: "pages/postagemNintendo/temtem" */))
const _1aa12ac0 = () => interopDefault(import('..\\pages\\postagemNintendo\\zelda.vue' /* webpackChunkName: "pages/postagemNintendo/zelda" */))
const _3c1797d0 = () => interopDefault(import('..\\pages\\PostagemSony\\Descontos.vue' /* webpackChunkName: "pages/PostagemSony/Descontos" */))
const _1274c37a = () => interopDefault(import('..\\pages\\PostagemSony\\Genshin.vue' /* webpackChunkName: "pages/PostagemSony/Genshin" */))
const _e195708a = () => interopDefault(import('..\\pages\\PostagemSony\\Kingdom.vue' /* webpackChunkName: "pages/PostagemSony/Kingdom" */))
const _e241bc6c = () => interopDefault(import('..\\pages\\PostagemSony\\Monster.vue' /* webpackChunkName: "pages/PostagemSony/Monster" */))
const _59903286 = () => interopDefault(import('..\\pages\\PostagemSony\\StarWars.vue' /* webpackChunkName: "pages/PostagemSony/StarWars" */))
const _f6ef0242 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _780eaed2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3114d062,
    name: "control"
  }, {
    path: "/criar-post",
    component: _0c4e992d,
    name: "criar-post"
  }, {
    path: "/desconto",
    component: _8c87fb14,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _dbb0d878,
    name: "fale-conosco"
  }, {
    path: "/filmes",
    component: _7b368b86,
    name: "filmes"
  }, {
    path: "/genshin",
    component: _76c8ce0f,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _231ea48c,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _719a1cf3,
    name: "logado"
  }, {
    path: "/login",
    component: _e4bf68a4,
    name: "login"
  }, {
    path: "/microsoft",
    component: _1725379a,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _43422200,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _74d43c72,
    name: "sony"
  }, {
    path: "/supermash",
    component: _e3aaedae,
    name: "supermash"
  }, {
    path: "/trabalhe-conosco",
    component: _4a01a752,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/AOC",
    component: _04df274c,
    name: "Postagem-AOC"
  }, {
    path: "/Postagem/Coringa",
    component: _774ef5c8,
    name: "Postagem-Coringa"
  }, {
    path: "/Postagem/Cyberpunk",
    component: _77815d1c,
    name: "Postagem-Cyberpunk"
  }, {
    path: "/Postagem/Lancamento",
    component: _29c6f4f3,
    name: "Postagem-Lancamento"
  }, {
    path: "/Postagem/Netflix",
    component: _2b1476e9,
    name: "Postagem-Netflix"
  }, {
    path: "/Postagem/Pokemon",
    component: _ffecd0ac,
    name: "Postagem-Pokemon"
  }, {
    path: "/postagemMicrosoft/halo",
    component: _e3324c3e,
    name: "postagemMicrosoft-halo"
  }, {
    path: "/postagemMicrosoft/needforspeed",
    component: _3d91dc59,
    name: "postagemMicrosoft-needforspeed"
  }, {
    path: "/postagemMicrosoft/overwatchdois",
    component: _7d808e1b,
    name: "postagemMicrosoft-overwatchdois"
  }, {
    path: "/postagemMicrosoft/seriexs",
    component: _14ded462,
    name: "postagemMicrosoft-seriexs"
  }, {
    path: "/postagemMicrosoft/valhallavendas",
    component: _71222b83,
    name: "postagemMicrosoft-valhallavendas"
  }, {
    path: "/postagemNintendo/animalcrossing",
    component: _6c64f82c,
    name: "postagemNintendo-animalcrossing"
  }, {
    path: "/postagemNintendo/fireemblem",
    component: _f152a544,
    name: "postagemNintendo-fireemblem"
  }, {
    path: "/postagemNintendo/ghostrunner",
    component: _c534933e,
    name: "postagemNintendo-ghostrunner"
  }, {
    path: "/postagemNintendo/mario",
    component: _3a55bbe6,
    name: "postagemNintendo-mario"
  }, {
    path: "/postagemNintendo/nintendovendas",
    component: _68a19acc,
    name: "postagemNintendo-nintendovendas"
  }, {
    path: "/postagemNintendo/temtem",
    component: _403ade0e,
    name: "postagemNintendo-temtem"
  }, {
    path: "/postagemNintendo/zelda",
    component: _1aa12ac0,
    name: "postagemNintendo-zelda"
  }, {
    path: "/PostagemSony/Descontos",
    component: _3c1797d0,
    name: "PostagemSony-Descontos"
  }, {
    path: "/PostagemSony/Genshin",
    component: _1274c37a,
    name: "PostagemSony-Genshin"
  }, {
    path: "/PostagemSony/Kingdom",
    component: _e195708a,
    name: "PostagemSony-Kingdom"
  }, {
    path: "/PostagemSony/Monster",
    component: _e241bc6c,
    name: "PostagemSony-Monster"
  }, {
    path: "/PostagemSony/StarWars",
    component: _59903286,
    name: "PostagemSony-StarWars"
  }, {
    path: "/post/:id?",
    component: _f6ef0242,
    name: "post-id"
  }, {
    path: "/",
    component: _780eaed2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
