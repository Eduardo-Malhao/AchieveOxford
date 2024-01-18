import React from "react";
import Banner from "../images/banner_adults.png";

export default class adults extends React.Component {

  render() {
    return (
      <>
        <div>
          <img
            src={Banner}
            alt="Quando o Inglês é Oxford ele entra na cabeça!"
          />
          <p>Sabe aquele curso tradicional de inglês?
Você não encontra isso aqui. O curso Expert é focado na conversação e na interação entre os alunos para que compartilhem suas vivências e construam, juntos com o professor, um ensino que faça sentido. Um curso que usa o seu mundo para preparar você para o mundo. Achieve Languages agora em São José dos Campos, no bairro Vista Verde, agende sua aula experimental!</p>
        </div>

        <div>
          <div>

            <h3>Idade para iniciar</h3>
            <p>Curso desenvolvido para jovens a partir dos 16 anos e adultos</p>
          </div>

          <div>
            
            <h3>Carga Hoária</h3>
            <p>Carga de até 120 horas por ano.</p>
          </div>

          <div>
            
            <h3>Blended Learning</h3>
            <p>O conteúdo não fica só na sala de aula. Você pode acessar, de qualquer lugar, uma plataforma on-line interativa com fixação e expansão do trabalho realizado nas aulas. A prática é dentro e fora da escola.</p>
          </div>

          <div>
            
            <h3>MAS, COMO FALA ISSO MESMO?</h3>
            <p>A Achieve acredita que a conexão entre as pessoas muda tudo. Por isso que o foco das aulas é na conversação, com simulações de situações do cotidiano e no aprendizado de uma linguagem prática, natural e com relevância.</p>
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