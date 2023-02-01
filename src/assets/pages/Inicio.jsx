import '../../App.css';
import Contatos from './Contatos';
import Doar from './Doar';

export default function Inicio() {
    return (
      <div className="App">
        <div className='space'>
          <p className='OS'>Organização Social</p>
          <div className='nomeONG'>
            <div className="lineONG"/><h1>OSC Novo Amanhecer</h1>
          </div>
        </div>

        <div className='space'>
          <h4 className='SI'>Sobre a instituição</h4>
          <div className="texto">
            <div className="lineText"/>
            <p>
              O Projeto OSC Novo Amanhecer surgiu em 2017 com o objetivo de combater a 
              fome e a vulnerabilidade social na região nordeste do Brasil. Através do 
              nosso trabalho, temos ajudado crianças, adolescentes, adultos e idosos que 
              se encontram em situação de vulnerabilidade econômica.
            </p>
          </div>
        </div>

        <div className='space'>
          <div className="AfterDoacao">
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
        </div>
        <Doar/>
        <div className='space'>
          <div>
            <h4>Nossas Ações</h4>
            <p>
              Realizamos o Sopão Solidário todas as segundas-feiras no bairro do Prado, 
              onde distribuímos rações, remédios, cestas básicas e roupas. Também 
              conseguimos doações no Ceasa para ajudar a alimentar as pessoas.
            </p>
          </div>
          <div>
            <h4>Como funcionamos</h4>
            <p>
            Não recebemos ajuda da prefeitura ou de nenhum deputado, somos uma instituição 
            totalmente independente e sempre pedimos doações em bairros nobres para ajudar 
            as pessoas em necessidade. Além disso, também ajudamos animais de rua e repassamos 
            remédios, roupas e fraldas sempre que conseguimos.
            </p>
          </div>
          <div>
            <h4>Nossos objetivos</h4>
            <p>
            Nosso objetivo é ajudar as pessoas a terem uma vida mais digna e, com sua ajuda, 
            podemos continuar a fazer a diferença na vida de muitas pessoas. Faça sua doação 
            e junte-se a nós na luta contra a fome e a vulnerabilidade social.
            </p>
          </div>          
        </div>
        <Contatos/>  
      </div>
    )
  }
  
  