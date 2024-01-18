import React from "react";
import Banner from "../images/banner_kids.png";

export default class kids extends React.Component {

  render() {
    return (
      <>
        <div>
          <img
            src={Banner}
            alt="A gente sabe como preparar seu filho para o futuro. Afinal, faz mais de 500 anos que a gente ensina pelo mundo"
          />
          <p>Bilíngue parece ser a palavra do momento, mas o que torna a Achieve tão diferente é que, além da criança estudar inglês enquanto aprende ciências, artes e outras matérias, ela conta com a experiência da Oxford University Press, editora da Universidade de Oxford, que produz conteúdo nas mais diversas áreas de conhecimento. Venha nos conhecer em São José dos Campos, bairro Vista Verde.</p>
        </div>

        <div>
          <div>

            <h3>Idade para iniciar</h3>
            <p>Curso desenvolvido para crianças de 3 a 10 anos</p>
          </div>

          <div>
            
            <h3>Carga Hoária</h3>
            <p>Carga de até 120 horas por ano.</p>
          </div>

          <div>
            
            <h3>O TRANSFORMAR DO AMANHÃ</h3>
            <p>Durante as aulas, as crianças são expostas a técnicas de ensino que vão ajudá-las a construir o conhecimento sobre o assunto da aula, desenvolvendo autonomia e pensamento crítico desde o começo de todo o processo.</p>
          </div>

          <div>
            
            <h3>Metodologia - CRISPY</h3>
            <p>A Achieve acompanha e oferece suporte de especialistas no ensino de língua inglesa para sempre aprimorar o projeto nas escolas.</p>
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