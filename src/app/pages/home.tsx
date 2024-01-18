import React from "react";
import motivos from "../images/PQ FAZER INGLÊS.png";
import university from "../images/oxford.png";
import kids from "../images/tiny_kids.png";
import teens from "../images/teens.png";
import adults from "../images/adults.png";

export default class Home extends React.Component {

  render() {
    return (
      <>
      {/* 
        header com links das pgs
        footer com allrights reserved
        montar um card bonito com ox pra sjc
        cards com kids teens e adults
        card com historia oxford
        cards com formandos
        finaliza com local e contatos
        tentar puxar alguma api para avaliações ou link
      */}
        <div>
          {/* logo ox para sjc, redes sociais flutuando na img */}
        </div>
        
        <div>
          <div>
            <img
              src={motivos}
              alt="Motivos para se estudar Inglês"
            />
            <h2>De Oxford para São José dos Campos</h2>
          </div>
          <div>
            <img
              src={university}
              alt="Universidade de Oxford"
            />
            <h2>5 anos eleita como a melhor Universidade do Mundo!</h2>
          </div>
        </div>

        <div>
          <div>
            <img
              src={kids}
              alt="Tiny Kids e Kids"
            />
            <h3>Tiny Kids/Kids</h3>
            <p
            
            >
              Saiba Mais
            </p>
          </div>
          <div>
            <img
              src={teens}
              alt="Teens"
            />
            <h3>Teens</h3>
            <p
            
            >
              Saiba Mais
            </p>
          </div>
          <div>
            <img
              src={adults}
              alt="Adults"
            />
            <h3>Adults</h3>
            <p
            
            >
              Saiba Mais
            </p>
          </div>
        </div>
        
        <div>
          <h2>Formandos Achieve Oxford</h2>
          {/* fotos ou carrosel */}
        </div>

        <div>
          <h3>Venha nos Conhecer!</h3>
          <p>R. Cidade de Assunção, 14 - Vista Verde, São José dos Campos</p>
          <p>(12) 3912-3727</p>
          <p>@achievesjc</p>
          {/* api google negocio ou localizacao */}
        </div>
      </>
    )
  }
}