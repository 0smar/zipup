import React from 'react';

import SofiNormal from '../images/Sofi.svg';
import SofiHappy from '../images/SofiHappy.svg';
import SofiSad from '../images/SofiSad.svg';
import SofiCry from '../images/SofiCry.svg';
import SofiMad from '../images/SofiMad.svg';

const Sofi = () => (
  <div className="sofi-section content" id="sofi">
    
    <div className="description">
      <h1>Ella es <span className="highlight-text">Sofi</span></h1>
      <p className="w50">
        Sofi es la asistente personal que te ayudará a saber si lo que estás comiendo es correcto o no para tu dieta. Es inteligente y aprenderá sobre ti y lo que te gusta.
      </p>
      <div className="sofi-faces">
        <div className="face">
          <img src={SofiNormal} alt="Sofi"/>
        </div>
        <div className="face">
          <img src={SofiHappy} alt="Sofi" />
        </div>
        <div className="face">
          <img src={SofiSad} alt="Sofi" />
        </div>
        <div className="face">
          <img src={SofiMad} alt="Sofi" />
        </div>
        <div className="face">
          <img src={SofiCry} alt="Sofi" />
        </div>
      </div>
      <p className="w50">
        Sofi te dará consejos para que sigas en el buen camino y cumplas tus metas basándose en 3 aspectos importantes:
      </p>
      <ul>
        <li><h1 className="highlight-text">1</h1>Plan Alimenticio</li>
        <li><h1 className="highlight-text">2</h1>Actividad Física</li>
        <li><h1 className="highlight-text">3</h1>Presupuesto</li>
      </ul>
    </div>
  </div>
)

export default Sofi;