<template>
  <div>
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>
          Detroit: Become Human ultrapassa marca de 2 milhões de cópias vendidas
        </h1>
      </div>
      <div class="descricaopostagem">
        <p>
          A Sony e a Quantic Dream anunciaram na última quarta-feira (12) que
          Detroit: Become Human já vendeu mais de 2 milhões de cópias desde que
          chegou às lojas em maio deste ano. Embora o número não seja tão alto
          quanto outros games da plataforma, o resultado foi o suficiente para
          tornar o game o título que vendeu mais rapidamente na história da
          desenvolvedora. <br />
          Através do Twitter, a empresa agradeceu aos fãs por ajudar com o
          sucesso do jogo, reconhecendo no processo a importância de seus
          profissionais e do apoio da marca PlayStation. Recentemente, o título
          passou a ser vendido junto às remasterizações de Heavy Rain e Beyond:
          Two Souls em um novo pacote para o PlayStation 4.
        </p>
        <div class="imgPostagem">
          <img
            src="https://images8.alphacoders.com/655/655396.png"
            height="100%"
            width="100%"
            alt="Um dos principais personagens"
          />
        </div>
        <div class="texto2">
          <p>
            Disponível somente para a plataforma da Sony, Detroit: Become Human
            conta a história de um grupo de androides que adquirem consciência
            própria e começam a questionar seus papeis. A narrativa se divide
            entre diversos protagonistas, com momentos nos quais suas tramas se
            entrelaçam, sendo possível falhar em algumas delas e ver as
            consequências que isso traz.
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
      title: 'IGN - Detroit: Become Human',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Detroit: Become Human, vendas, ps4, console,',
        },
      ],
    }
  },
}
</script>
