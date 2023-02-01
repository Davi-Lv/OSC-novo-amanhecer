import '../../App.css';
import Backgroundbackground from '../components/Backgroundbackground';
import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';

export default function Doar() {
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, []);

  return (
    <animated.div style={props}>
      <Backgroundbackground titulo="Faça seu apoio também" />
      <div className='doar space'>
        <div className='sep'>
          <div className="tituloDoar">
            <p>Pix ou depósito</p>
          </div>
          <div className="subDoar">
            <p>
              <b>Banco:</b> 655 - Neon Pagamentos S.A. <br /><br />
              <b>Agência:</b> 0655 <br /><br />
              <b>Conta:</b> 20755558-3 <br /><br />
              <b>Pix:</b> novoamanhecerrecife@gmail.com <br /><br />
              <b>Nome:</b> Igor Mendonça Eloi da Silva <br /><br />
            </p>
          </div>
        </div>
        <div>
          <div className="tituloDoar">
            <p>Boleto ou credito</p>
          </div>
          <div className="subDoar2">
            <a href="https://www.asaas.com/c/591775631563"><p>R$10,00</p></a>
            <a href="https://www.asaas.com/c/038760022746"><p>R$20,00</p></a>
            <a href="https://www.asaas.com/c/060183942912"><p>R$50,00</p></a>
            <a href='https://www.asaas.com/c/268451027512'><button>Outros valores</button></a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}