import React from "react";
import Banner from "../images/banner_teens.jpg";

export default class teens extends React.Component {

  render() {
    return (
      <>
        <div>
          <img
            src={Banner}
            alt="WOW"
          />
          <p>O Teens é um curso que traz o universo do adolescente para dentro da sala de aula. Todo o material didático se conecta com a realidade do estudante de um jeito orgânico, com professores que reinventam suas aulas para manter os alunos interessados e reduzir a distância entre eles. Sem decoreba. Faça-nos uma visita, agora em São José dos Campos, no bairro Vista Verde</p>
        </div>

        <div>
          <div>

            <h3>Idade para iniciar</h3>
            <p>Curso desenvolvido para crianças de 11 a 15 anos.</p>
          </div>

          <div>
            
            <h3>Carga Hoária</h3>
            <p>Carga de até 120 horas por ano.</p>
          </div>

          <div>
            
            <h3>DIZ AÍ, ALUNO</h3>
            <p>Nosso inglês é focado na fala para o bate-papo do dia a dia mesmo. Seja para fazer aquele curso no exterior ou trocar ideias com pessoas de pertinho ou de bem longe. Afinal de contas, um mundo conectado não tem fronteiras!</p>
          </div>

          <div>
            
            <h3>É INGLÊS DE VERDADE</h3>
            <p>Aluno Achieve sabe que comunicação vai além dos livros. Sabe que inglês bom é aquele que você aprende de muitas formas, sozinho, com os amigos, com atividades na sala de aula, música, on-line, blogs e YouTube. Bem, tudo que você mais curte.</p>
          </div>
        </div>

        <div>
          <h2>COMO O INGLÊS FEZ A DIFERENÇA PELA VOZ DE QUEM FAZ ACHIEVE LANGUAGES.</h2>
          
          <div>
            {/* videos */}
          </div>
        </div>
      </>
    )
  }
}