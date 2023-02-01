import '../../App.css';
import Backgroundbackground from '../components/Backgroundbackground';
import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';

export default function Contatos() {
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, []);

  return (
    <animated.div style={props} className="App">
      <div>
        <Backgroundbackground titulo="Nossos Contatos" />
        <div className='localizacao space'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.2447479673165!2d-34.911837372505964!3d-8.064353706715567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab191c83cff9df%3A0x97e83c9d68713380!2sOsc-%20Organiza%C3%A7%C3%A3o%20Novo%20Amanhecer!5e0!3m2!1spt-BR!2sbr!4v1675269457006!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>              
          </div>
          <div className='local'>
            <h3>Localização da ONG</h3>
            <p>
              Nossa ONG Novo Amanhecer está
              localizada na Rua Escritor Alexandre
              Neptuno, 278 - Afogados, Recife - PE, 50830-720
            </p>
            <a href="https://goo.gl/maps/e4pVaTxamTLv23Wh7"><button>Veja no mapa</button></a>
          </div>
        </div>
        <div>
          <h3 className='SI contactLine'>Email</h3>
          <p className='contactSI space'>icon email: novoamanhecerrecife@gmail.com</p>
        </div>
        <div>
          <h3 className='SI contactLine'>Telefone e WhatsApp</h3>
          <p className='contactSI space'>icon fone: (81) 9 9981-4988</p>
        </div>
        <div>
          <h3 className='SI contactLine'>Midias sociais</h3>
          <p className='contactSI space'>Instagram icon: @oscnovoamanhecer</p>
        </div>
      </div>
    </animated.div>
  )
}

