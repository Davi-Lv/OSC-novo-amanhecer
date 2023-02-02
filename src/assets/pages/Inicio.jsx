import '../../App.css';
import Contatos from './Contatos';
import Doar from './Doar';
import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';

export default function Inicio() {

  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, []);

  return (
    <animated.div style={props} className="App">

      <div className='ONG'>
        <p className='OS'>Organização Social</p>
        <div className='nomeONG space'>
          <div className="lineONG" /><h1>OSC Novo Amanhecer</h1>
        </div>
      </div>

      <div>
        <h4 className='SI'>Sobre a instituição</h4>
        <div className="texto space">
          <div className="lineText sobreInst" />
          <p>
            O Projeto OSC Novo Amanhecer surgiu em 2017 com o objetivo de combater a
            fome e a vulnerabilidade social na região nordeste do Brasil. Através do
            nosso trabalho, temos ajudado crianças, adolescentes, adultos e idosos que
            se encontram em situação de vulnerabilidade econômica.
          </p>
        </div>
      </div>
      <div className="AfterDoacao space">
        <p>
          "Você já parou para pensar na realidade de milhares de pessoas que vivem nas
          ruas, sem acesso à comida, água potável, roupas, e remédios? Eles são esquecidos
          pela sociedade, mas não devem ser esquecidos por nós. A ONG Novo Amanhecer luta
          diariamente para mudar essa realidade, mas precisamos de sua ajuda. Cada doação,
          cada voluntariado, pode fazer a diferença na vida de alguém. Juntos, podemos
          mudar a realidade de muitas pessoas em situação vulnerável na nossa região. Faça
          a diferença, junte-se a nós e ajude a mudar a vida de alguém hoje."
        </p>
      </div>

      <Doar />

      <div>
        <h4 className='SI'>Nossas Ações</h4>
        <div className="texto space">
          <div className="lineText nossasAcoes" />
          <p>
            Realizamos o Sopão Solidário todas as segundas-feiras no bairro do Prado,
            onde distribuímos rações, remédios, cestas básicas e roupas. Também
            conseguimos doações no Ceasa para ajudar a alimentar as pessoas.
          </p>
        </div>
      </div>

      <div>
        <h4 className='SI'>Como funcionamos</h4>
        <div className="texto space">
          <div className="lineText comoFunc" />
          <p>
            Não recebemos ajuda da prefeitura ou de nenhum deputado, somos uma instituição
            totalmente independente e sempre pedimos doações em bairros nobres para ajudar
            as pessoas em necessidade. Além disso, também ajudamos animais de rua e repassamos
            remédios, roupas e fraldas sempre que conseguimos.
          </p>
        </div>
      </div>

      <div>
        <h4 className='SI'>Nossos objetivos</h4>
        <div className="texto space">
          <div className="lineText nossosObjs" />
          <p>
            Nosso objetivo é ajudar as pessoas a terem uma vida mais digna e, com sua ajuda,
            podemos continuar a fazer a diferença na vida de muitas pessoas. Faça sua doação
            e junte-se a nós na luta contra a fome e a vulnerabilidade social.
          </p>
        </div>
      </div>
      <Contatos />
    </animated.div>
  )
}

