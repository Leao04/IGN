import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _448f97ff = () => interopDefault(import('..\\pages\\desconto.vue' /* webpackChunkName: "pages/desconto" */))
const _92998666 = () => interopDefault(import('..\\pages\\fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _64503934 = () => interopDefault(import('..\\pages\\genshin.vue' /* webpackChunkName: "pages/genshin" */))
const _52b73f91 = () => interopDefault(import('..\\pages\\lançamentos.vue' /* webpackChunkName: "pages/lançamentos" */))
const _a390fe88 = () => interopDefault(import('..\\pages\\logado.vue' /* webpackChunkName: "pages/logado" */))
const _f15a6a76 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _77e7006c = () => interopDefault(import('..\\pages\\microsoft.vue' /* webpackChunkName: "pages/microsoft" */))
const _63d490ee = () => interopDefault(import('..\\pages\\nintendo.vue' /* webpackChunkName: "pages/nintendo" */))
const _5bd9fe7b = () => interopDefault(import('..\\pages\\sony.vue' /* webpackChunkName: "pages/sony" */))
const _100d28e0 = () => interopDefault(import('..\\pages\\trabalhe-conosco.vue' /* webpackChunkName: "pages/trabalhe-conosco" */))
const _71c89f63 = () => interopDefault(import('..\\pages\\Postagem\\AOC.vue' /* webpackChunkName: "pages/Postagem/AOC" */))
const _310a19b3 = () => interopDefault(import('..\\pages\\Postagem\\Coringa.vue' /* webpackChunkName: "pages/Postagem/Coringa" */))
const _6a43c76e = () => interopDefault(import('..\\pages\\Postagem\\Cyberpunk.vue' /* webpackChunkName: "pages/Postagem/Cyberpunk" */))
const _11fcf608 = () => interopDefault(import('..\\pages\\Postagem\\Lancamento.vue' /* webpackChunkName: "pages/Postagem/Lancamento" */))
const _d073e900 = () => interopDefault(import('..\\pages\\Postagem\\Netflix.vue' /* webpackChunkName: "pages/Postagem/Netflix" */))
const _2689a77e = () => interopDefault(import('..\\pages\\Postagem\\Pokemon.vue' /* webpackChunkName: "pages/Postagem/Pokemon" */))
const _711327bc = () => interopDefault(import('..\\pages\\postagemMicrosoft\\Descontos.vue' /* webpackChunkName: "pages/postagemMicrosoft/Descontos" */))
const _40666138 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\halo.vue' /* webpackChunkName: "pages/postagemMicrosoft/halo" */))
const _0b47c6a0 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\needforspeed.vue' /* webpackChunkName: "pages/postagemMicrosoft/needforspeed" */))
const _59fe58a4 = () => interopDefault(import('..\\pages\\postagemMicrosoft\\overwatchdois.vue' /* webpackChunkName: "pages/postagemMicrosoft/overwatchdois" */))
const _27f50caa = () => interopDefault(import('..\\pages\\postagemMicrosoft\\seriexs.vue' /* webpackChunkName: "pages/postagemMicrosoft/seriexs" */))
const _245db21a = () => interopDefault(import('..\\pages\\postagemMicrosoft\\valhallavendas.vue' /* webpackChunkName: "pages/postagemMicrosoft/valhallavendas" */))
const _48e2c2b5 = () => interopDefault(import('..\\pages\\postagemNintendo\\animalcrossing.vue' /* webpackChunkName: "pages/postagemNintendo/animalcrossing" */))
const _2c9ac654 = () => interopDefault(import('..\\pages\\postagemNintendo\\control.vue' /* webpackChunkName: "pages/postagemNintendo/control" */))
const _2f692467 = () => interopDefault(import('..\\pages\\postagemNintendo\\fireemblem.vue' /* webpackChunkName: "pages/postagemNintendo/fireemblem" */))
const _10bbbf10 = () => interopDefault(import('..\\pages\\postagemNintendo\\ghostrunner.vue' /* webpackChunkName: "pages/postagemNintendo/ghostrunner" */))
const _27557986 = () => interopDefault(import('..\\pages\\postagemNintendo\\mario.vue' /* webpackChunkName: "pages/postagemNintendo/mario" */))
const _afa605ba = () => interopDefault(import('..\\pages\\postagemNintendo\\nintendovendas.vue' /* webpackChunkName: "pages/postagemNintendo/nintendovendas" */))
const _d2f1eec6 = () => interopDefault(import('..\\pages\\postagemNintendo\\supermash.vue' /* webpackChunkName: "pages/postagemNintendo/supermash" */))
const _63a77cd2 = () => interopDefault(import('..\\pages\\postagemNintendo\\temtem.vue' /* webpackChunkName: "pages/postagemNintendo/temtem" */))
const _66be9bd2 = () => interopDefault(import('..\\pages\\postagemNintendo\\zelda.vue' /* webpackChunkName: "pages/postagemNintendo/zelda" */))
const _d8188922 = () => interopDefault(import('..\\pages\\PostagemSony\\Descontos.vue' /* webpackChunkName: "pages/PostagemSony/Descontos" */))
const _26e796de = () => interopDefault(import('..\\pages\\PostagemSony\\Genshin.vue' /* webpackChunkName: "pages/PostagemSony/Genshin" */))
const _694cb8d2 = () => interopDefault(import('..\\pages\\PostagemSony\\Kingdom.vue' /* webpackChunkName: "pages/PostagemSony/Kingdom" */))
const _68f692e1 = () => interopDefault(import('..\\pages\\PostagemSony\\Monster.vue' /* webpackChunkName: "pages/PostagemSony/Monster" */))
const _3c0e9886 = () => interopDefault(import('..\\pages\\PostagemSony\\StarWars.vue' /* webpackChunkName: "pages/PostagemSony/StarWars" */))
const _54279a76 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _84a9b0a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/desconto",
    component: _448f97ff,
    name: "desconto"
  }, {
    path: "/fale-conosco",
    component: _92998666,
    name: "fale-conosco"
  }, {
    path: "/genshin",
    component: _64503934,
    name: "genshin"
  }, {
    path: "/lançamentos",
    component: _52b73f91,
    name: "lançamentos"
  }, {
    path: "/logado",
    component: _a390fe88,
    name: "logado"
  }, {
    path: "/login",
    component: _f15a6a76,
    name: "login"
  }, {
    path: "/microsoft",
    component: _77e7006c,
    name: "microsoft"
  }, {
    path: "/nintendo",
    component: _63d490ee,
    name: "nintendo"
  }, {
    path: "/sony",
    component: _5bd9fe7b,
    name: "sony"
  }, {
    path: "/trabalhe-conosco",
    component: _100d28e0,
    name: "trabalhe-conosco"
  }, {
    path: "/Postagem/AOC",
    component: _71c89f63,
    name: "Postagem-AOC"
  }, {
    path: "/Postagem/Coringa",
    component: _310a19b3,
    name: "Postagem-Coringa"
  }, {
    path: "/Postagem/Cyberpunk",
    component: _6a43c76e,
    name: "Postagem-Cyberpunk"
  }, {
    path: "/Postagem/Lancamento",
    component: _11fcf608,
    name: "Postagem-Lancamento"
  }, {
    path: "/Postagem/Netflix",
    component: _d073e900,
    name: "Postagem-Netflix"
  }, {
    path: "/Postagem/Pokemon",
    component: _2689a77e,
    name: "Postagem-Pokemon"
  }, {
    path: "/postagemMicrosoft/Descontos",
    component: _711327bc,
    name: "postagemMicrosoft-Descontos"
  }, {
    path: "/postagemMicrosoft/halo",
    component: _40666138,
    name: "postagemMicrosoft-halo"
  }, {
    path: "/postagemMicrosoft/needforspeed",
    component: _0b47c6a0,
    name: "postagemMicrosoft-needforspeed"
  }, {
    path: "/postagemMicrosoft/overwatchdois",
    component: _59fe58a4,
    name: "postagemMicrosoft-overwatchdois"
  }, {
    path: "/postagemMicrosoft/seriexs",
    component: _27f50caa,
    name: "postagemMicrosoft-seriexs"
  }, {
    path: "/postagemMicrosoft/valhallavendas",
    component: _245db21a,
    name: "postagemMicrosoft-valhallavendas"
  }, {
    path: "/postagemNintendo/animalcrossing",
    component: _48e2c2b5,
    name: "postagemNintendo-animalcrossing"
  }, {
    path: "/postagemNintendo/control",
    component: _2c9ac654,
    name: "postagemNintendo-control"
  }, {
    path: "/postagemNintendo/fireemblem",
    component: _2f692467,
    name: "postagemNintendo-fireemblem"
  }, {
    path: "/postagemNintendo/ghostrunner",
    component: _10bbbf10,
    name: "postagemNintendo-ghostrunner"
  }, {
    path: "/postagemNintendo/mario",
    component: _27557986,
    name: "postagemNintendo-mario"
  }, {
    path: "/postagemNintendo/nintendovendas",
    component: _afa605ba,
    name: "postagemNintendo-nintendovendas"
  }, {
    path: "/postagemNintendo/supermash",
    component: _d2f1eec6,
    name: "postagemNintendo-supermash"
  }, {
    path: "/postagemNintendo/temtem",
    component: _63a77cd2,
    name: "postagemNintendo-temtem"
  }, {
    path: "/postagemNintendo/zelda",
    component: _66be9bd2,
    name: "postagemNintendo-zelda"
  }, {
    path: "/PostagemSony/Descontos",
    component: _d8188922,
    name: "PostagemSony-Descontos"
  }, {
    path: "/PostagemSony/Genshin",
    component: _26e796de,
    name: "PostagemSony-Genshin"
  }, {
    path: "/PostagemSony/Kingdom",
    component: _694cb8d2,
    name: "PostagemSony-Kingdom"
  }, {
    path: "/PostagemSony/Monster",
    component: _68f692e1,
    name: "PostagemSony-Monster"
  }, {
    path: "/PostagemSony/StarWars",
    component: _3c0e9886,
    name: "PostagemSony-StarWars"
  }, {
    path: "/post/:id?",
    component: _54279a76,
    name: "post-id"
  }, {
    path: "/",
    component: _84a9b0a4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
