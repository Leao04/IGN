<template>
  <div>
    <div class="grid">
      <div class="logo">
        <nuxt-link to="/">
          <img
            class="logo"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2018/08/IGN-Logo.png"
            alt="Logo da IGN"
            height="90em"
            width="230em"
          />
        </nuxt-link>
      </div>
      <div class="sony">
        <nuxt-link to="/sony">Sony</nuxt-link>
      </div>
      <div class="microsoft">
        <nuxt-link to="/microsoft">Microsoft</nuxt-link>
      </div>
      <div class="nintendo">
        <nuxt-link to="/nintendo">Nintendo</nuxt-link>
      </div>
      <div class="blog">
        <nuxt-link to="/">Blog</nuxt-link>
      </div>
      <div class="login">
        <li v-if="login">
          <a
            href="logout"
            exact-active-class="is-active"
            @click.prevent="logout"
          >
            <b-icon icon="github" /> Sair
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
@import '../assets/css/estilo.scss';
</style>
