<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Série de TV Halo reformula Cortana com dubladora original</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          De acordo com o IGN, a série Halo da Showtime, terá Jen Taylor no
          elenco. A atriz é a voz original de Cortana em todos os jogos da
          franquia Halo, e agora irá reprisar o papel na TV. <br />
          Cortana é uma inteligência artificial que auxilia Master Chief ao
          longo da série de jogos, e seria originalmente interpretada na série
          por Natascha McElhone, que foi escalada em um papel duplo, também
          interpretando a criadora de Cortana, Dra. Catherine Halsey.
        </p>
        <div class="imgPostagem">
          <img
            src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/11/taylor-cortana.jpg?fit=bounds&width=640&height=480"
            height="100%"
            width="100%"
            alt="Personagem do jogo ao lado da atriz real"
          />
        </div>
        <div class="texto2">
          <p>
            A mudança foi devido as dificuldades de agendamento devido a
            pandemia de coronavírus, e McElhone acabou não podendo concluir o
            trabalho como Cortana. <br />
            Mas continuará com o papel de Halsey. A série Halo ainda não tem
            previsão de estreia.
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
      title: 'IGN - Halo Serie',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Novidades, Microsoft, Halo, Infitnite, Serie',
        },
      ],
    }
  },
}
</script>
