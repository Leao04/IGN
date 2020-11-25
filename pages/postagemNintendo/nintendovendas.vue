<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Nintendo Switch supera vendas do NES</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          A Nintendo vendeu 6.86 milhões de unidades do Switch entre julho e
          setembro, alcançando um total de 68.3 milhões de unidades vendidas
          desde o lançamento do console, em 2017. O console híbrido superou as
          vendas totais do Nintendo Entertainment System (NES). <br />
          As vendas no terceiro trimestre de 2020 representam um crescimento de
          mais de 40% em relação ao mesmo período do ano passado — o que
          impressiona, principalmente, considerando o lançamento do Switch Lite
          nesta época, em 2019. <br />
          Em comunicado divulgado na página dedicada aos investidores, a
          Nintendo informa que Animal Crossing: New Horizons foi um dos
          principais impulsionadores na venda de consoles. O jogo chegou a um
          total de 26.04 milhões de unidades vendidas.
        </p>
        <div class="imgPostagem">
          <img
            src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons.jpg"
            height="100%"
            width="100%"
            alt="Imagen do jogo AnimalCrossing"
          />
        </div>
        <div class="texto2">
          <p>
            Desde o início do atual ano fiscal da Nintendo, que começou em abril
            e vai até março de 2021, a empresa registrou 100.25 milhões de
            unidades vendidas em termos de software (jogos, por exemplo). As
            vendas digitais no Switch, inclusive, alcançaram o equivalente a US$
            1.65 bilhões — incluindo DLCs, assinaturas do Nintendo Switch Online
            e mais. <br />
            A maior parte do dinheiro arrecadado pela Nintendo neste ano fiscal
            vem das Américas. Os continentes americanos representam mais de 40%
            das vendas da Nintendo (o total, fora do Japão, é de 77.5%,
            incluindo Europa e outros continentes).
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
      title: 'IGN - Nintendo Switch',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Supera, Venda, IGN, 2021, Europa, Japão',
        },
      ],
    }
  },
}
</script>
