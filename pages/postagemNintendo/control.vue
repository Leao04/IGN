<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Control: Ultimate Edition está disponível no Nintendo Switch</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          O jogo Control: Ultimate Edition chegou em mais uma plataforma hoje
          (28): no Nintendo Switch. <br />
          O game está disponível via streaming, o que significa que o console
          não precisa processar os dados do jogo e que você não precisa de muito
          espaço para ter o título.
        </p>
        <div class="imgPostagem">
          <img
            src="https://jogandocasualmente.com.br/wp-content/uploads/2020/05/review-control-capa.jpg"
            height="100%"
            width="100%"
            alt="Crontro capa do jogo"
          />
        </div>
        <div class="texto2">
          <p>
            Uma demonstração está disponível na eShop gratuitamente. O download
            total é de 98 MB, e o jogador tem acesso a um launcher que faz a
            conexão entre o Nintendo Switch e os servidores onde o jogo está.
            Por ter sido anunciado ainda hoje em um Direct mini, quem quiser
            experimentar a versão terá que esperar um pouco, pois a capacidade
            dos servidores é limitada e há uma fila para o teste.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '../../assets/css/estilo.css';
</style>

<script>
export default {
  data() {
    return {
      title: 'IGN - Control',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Control, Ultimate Edition, Download, 98MB',
        },
      ],
    }
  },
}
</script>
