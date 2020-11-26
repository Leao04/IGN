<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Xbox Games With Gold: Jogos gratuitos de dezembro</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          A Microsoft revelou os jogos gratuitos da Xbox Games With Gold de
          dezembro. The Raven Remastered e Saints Row: Gat out of Hell são os
          principais destaques para o próximo mês nos consoles Xbox One e Xbox
          Series X/S. Dos criadores da série Book of Unwritten Tales, The Raven
          Remastered se passa em 1964, em Londres. O jogador controla Constable
          Anton Jakob Zellner e precisa resolver um mistério que inclui
          passagens por cenários clássicos de histórias de assassinato. O jogo
          estará disponível para download entre os dias 1 e 31 de dezembro.
        </p>
        <div class="imgPostagem">
          <img
            src="https://steamcdn-a.akamaihd.net/steam/apps/301910/ss_8a18fe0b549b5ef7763d62af69251507a4cdcdff.1920x1080.jpg?t=1570456213"
            height="100%"
            width="100%"
            alt="Personagem homen protagonista do jogo"
          />
        </div>
        <div class="texto2">
          <p>
            Em Bleed 2, o jogador controla a heroína de cabelo rosa chamada Wryn
            e precisa defender o mundo de uma força invasora de vilões em sete
            níveis com mais de vinte e cinco batalhas contra chefes. O jogo
            estará disponível para download entre os dias 16 de dezembro e 15 de
            janeiro. <br />
            Saints Row: Gat out of Hell, jogo da franquia clássica que pode ser
            jogado via retrocompatibilidade nos novos consoles, coloca o jogador
            no papel de Johnny Gat ou Kinzie Kensington. Juntos, eles precisam
            destruir o submundo em uma missão para salvar a alma do chefe. O
            jogo estará diponível para download entre os dias 1 e 15 de
            dezembro. <br />
            Em Stacking, Charlie Blackmore, o menor boneco de matrioska russo do
            mundo, precisa de ajuda para resgatar a própria família do nefasto
            industrial The Baron. O jogo vai estar disponível para download
            entre os dias 16 e 31 de dezembro.
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
      title: 'IGN - Xbox Games With Gold',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'gold, gratis, Saints Row, The Raven, dezembro',
        },
      ],
    }
  },
}
</script>
