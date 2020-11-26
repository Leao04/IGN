<template>
  <div>
    <div class="Postagem1">
      <div class="Textopostagem">
        <h1>PS4 e PS5: Jogos gratuitos da PS Plus em dezembro</h1>
      </div>
      <div class="descricaopostagem">
        <p>
          Just Cause 4, Rocket Arena e Worms Rumble são os jogos gratuitos de
          dezembro para assinantes do serviço PS Plus. Todos os títulos
          permanecerão disponíveis para download entre 1 de dezembro e 4 de
          janeiro. <br />
          Em Just Cause 4, o jogador assume novamente o papel do agente Rico
          Rodriguez, que conta com armas e itens fundamentais para enfrentar
          conflitos e condições climáticas extremas em Solis, na América do Sul.
          O jogo poderá ser baixado no PS4.
        </p>
        <div class="imgPostagem">
          <img
            src="https://www.futurebehind.com/wp-content/uploads/2019/01/just-cause-4-hq-leak-5.jpg"
            height="100%"
            width="100%"
            alt="Capa do jogo Just Cause 4  "
          />
        </div>
        <div class="texto2">
          <p>
            Rocket Arena é um jogo de tiro em que duas equipes formadas por três
            jogadores cada se enfrentam usando foguetes e habilidades únicos.
            Trabalho em equipe é prioridade nesse game, não se esqueça. O jogo
            poderá ser baixado no PS4. <br />
            Com uma arena de combate multiplataforma para 32 jogadores em tempo
            real, Worms Rumble traz pancadarias frenéticas no Mata-Mata e no
            modo Último Worm Sobrevivente. O jogo poderá ser baixado para PS4 e
            PS5.
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
      title: 'IGN - Ps Plus',
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
            'Just Cause 4, Rocket Arena, Worms Rumble, gratuito, ps, plus',
        },
      ],
    }
  },
}
</script>
