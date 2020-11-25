<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Assassin's Creed Valhalla foi o maior lançamento da série</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          Assassin's Creed Valhalla, novo jogo da franquia de ficção história
          com temática viking vendeu mais unidades do que qualquer outro jogo da
          série na primeira semana após o lançamento, de acordo com a própria
          Ubisoft. <br />
          O jogo se tornou também o mais vendido na história da Ubisoft para PC
          no período de lançamento. Embora números não tenham sido divulgados,
          ao que tudo indica, o mais recente jogo da série começou muito bem.
        </p>
        <div class="imgPostagem">
          <img
            src="https://sm.ign.com/ign_br/screenshot/default/ac-valhalla-review-ign_4wjh.jpg"
            height="100%"
            width="100%"
            alt="Personagem do jogo"
          />
        </div>
        <div class="texto2">
          <p>
            "Jogadores já adentraram bem Assassin's Creed Valhalla, tendo andado
            mais de 4 milhões de quilômetros, construído assentamentos vikings
            (cerca de 55 milhões de edifícios foram desbloqueados desde o
            lançamento)", informou a Ubisoft sobre os dados que somam atividades
            de todos os jogadores. <br />
            Assassin's Creed Valhalla está disponível para Xbox Series X,
            PlayStation 4, Xbox One e PC. O jogo será lançado para PS5 quando o
            console chegar ao Brasil. Aproveite que você está por aqui e confira
            nosso guia completo da aventura viking da Ubisoft.
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
      title: "IGN - Assassin's Creed Valhalla",
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Assassin's Creed, Lançamento, Xbox, PC, Playstation, Ubisoft, Viking, Xbox series, X, S, 4, Maior lançamento",
        },
      ],
    }
  },
}
</script>
