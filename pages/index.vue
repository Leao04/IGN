<template>
  <div>
    <div class="carrossel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="380"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->

        <b-carousel-slide img-src="../assets/img/resident.jpg">
          <h3>Resident Evil 2"</h3>
        </b-carousel-slide>
        <b-carousel-slide img-src="../assets/img/anime.jpg">
          <h3>O mundo dos animes agora na sua tela</h3>
        </b-carousel-slide>
        <b-carousel-slide img-src="../assets/img/ac.jpg">
          <h3>Assassin's Creed: Unity</h3>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://miro.medium.com/max/5000/1*3_P5gQuFQCXgNsADYOk8Yw.png"
        >
          <h3>Bloodborne</h3>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <br />
    <h1 class="evento">O maior evento da América Latina</h1>
    <div class="cavaleiro">
      <div class="textobgs">
        <p>
          A Brasil Game Show é uma feira anual de videogames organizada pelo
          empresário Marcelo Tavares, atualmente realizada em São Paulo, Brasil.
          A feira é considerada a maior conferência do gênero em toda a América
          Latina.
        </p>
      </div>
      <div class="imagembgs">
        <img
          src="https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/09/bgs.jpg"
          alt="Brasil Game Show"
        />
      </div>
    </div>
    <div class="container1">
      <div class="card1">
        <nuxt-link to="/Postagem/Coringa">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/635655082846943146-cdzbueiuuaatgqb_q1f5.560.png"
            alt=""
            height="350px"
            width="300px"
          />
          <p>Coringa de Jared Leto voltará em Snyder Cut de Liga da Justiça</p>
        </nuxt-link>
      </div>
      <div class="card2">
        <nuxt-link to="/Postagem/Cyberpunk">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/cp77-1920x1080-en-1583665789_v5es.560.jpg"
            alt=""
            height="350px"
            width="300px"
          />
          <p>
            Cyberpunk 2077: Lançamento, multiplayer, história, gameplay e mais
          </p>
        </nuxt-link>
      </div>
      <div class="card3">
        <nuxt-link to="/Postagem/Pokemon">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/crown-tundra-home_puba.560.png"
            alt=""
            height="350px"
            width="300px"
          />
          <p>Pokémon Sword & Shield: Tudo sobre The Crown Tundra</p>
        </nuxt-link>
      </div>
      <div class="card4">
        <nuxt-link to="/Postagem/Netflix">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/579b91e2b08074561cf3b8073878f301_stxy.560.png"
            alt=""
            height="350px"
            width="300px"
          />
          <p>Netflix: As estreias de filmes e séries em novembro</p>
        </nuxt-link>
      </div>
      <div class="card5">
        <nuxt-link to="/Postagem/lancamento">
          <img
            src="https://sm.ign.com/t/ign_br/slotter/default/hyrule-warriors-switch-button-fin-1599595486973_3hxe.560.png"
            alt=""
            height="350px"
            width="300px"
          />
          <p>Lançamentos de jogos da semana para consoles e PC</p>
        </nuxt-link>
      </div>
      <div class="card6">
        <nuxt-link to="/Postagem/AOC">
          <img
            src="https://assets1.ignimgs.com/2020/10/21/aoc-deck-1603308225333.jpg?fit=crop&width=282&height=470"
            alt=""
            height="350px"
            width="300px"
          />
          <p>Twitch Stream da AOC tem implicações para a política dos EUA</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script src="../dist/CountDown.js"></script>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      posts: [],
    }
  },
  async fetch() {
    const posts = await this.$axios.$get('posts')
    const users = await this.$axios.$get('users')
    this.posts = posts
      .map((post) => ({
        ...post,
        author: users.find((user) => user._id === post.author).name,
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style>
@import '../assets/css/estilo.scss';
</style>
