import '../../App.css';
import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';

export default function Campanhas() {
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, []);

  return (
    <animated.div style={props} className="App">
      <p style={{fontSize: 20, fontWeight: "bold", margin: 50, fontFamily: "Source Sans Pro"}}>Campanhas ainda não adicionadas</p>
    </animated.div>
  )
}

