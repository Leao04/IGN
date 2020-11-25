<template>
  <div>
    <hr />
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>Overwatch 2: Lançamento, gameplay, modos e mais</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          Além do aguardado Diablo 4, um dos próximos grandes lançamentos da
          Blizzard é Overwatch 2. A sequência do jogo de tiro em primeira pessoa
          está em desenvolvimento e, além de um novo motor gráfico, promete
          incluir modos inéditos, missões cooperativas com foco em história, um
          mapa no Rio de Janeiro e mais. A seguir, reunimos as principais
          informações sobre Overwatch 2, incluindo detalhes sobre o lançamento,
          plataformas e gameplay. O texto será atualizado conforme a Blizzard
          divulgar mais novidades.
        </p>
        <div class="imgPostagem">
          <img
            src="https://sm.ign.com/ign_br/screenshot/default/jwaxnjgcqpya9ze6nkuwwz_5fpe.jpg"
            height="100%"
            width="100%"
            alt="Os personagem do jogo"
          />
        </div>
        <div class="texto2">
          <p>
            Por enquanto, o game ainda não possui uma data de lançamento
            confirmada. É possível que mais informações sejam reveladas na
            versão online da BlizzCon que acontecerá no começo de 2021. <br />
            Overwatch 2 está em desenvolvimento para PS4, Xbox One, Nintendo
            Switch e PC. É bastante provável que as versões otimizadas para
            PlayStation 5 e Xbox Series X/S sejam confirmadas em breve.
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
      title: 'IGN - Overwatch 2',
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
            'Series X e S, Xbox, Microsoft, Brasil, PC, Computador, Em Breve, Nintendo, Switch, Sem data, Lançamento',
        },
      ],
    }
  },
}
</script>
