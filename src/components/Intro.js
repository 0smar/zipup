import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import Blob from '../components/Blob';

import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Sofi from '../images/SofiHappy.svg';
import Mockup from '../images/dark.png';

const Intro = () => (
  <div className="intro-section content" id="intro">
    <Blob />
    <div className="row-container description">
      <img src={Sofi} alt="Sofi es tu asistente nutricional" className="sofi" />
      <div className="column-container">
        <h1>Come <span className="highlight-text">lo que quieras</span> de una manera inteligente</h1>
        <p>
          Conoce a Sofi, la asistente nutricional que te dará información indicada al momento sobre lo que comes y cómo alcanzar tus objetivos.
        </p>
        <div className="row-container w100 aic">
          <Link 
            to="start" 
            className="button action-button" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}>
            Descarga la App
          </Link>
          <div className="social-media">
            <a href="https://facebook.com/zipupapp" target="_blank">
              <img src={Facebook} alt="ZipUp Twitter" />
            </a>
            <a href="https://instagram.com/zipupapp" target="_blank">
              <img src={Instagram} alt="ZipUp Instragram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="mockup">
      <img src={Mockup} alt="ZipUp imagen de aplicación móvil" className="mock" />
    </div>
    <a href="#about" className="scroll-label">
      Conoce más
    </a>
  </div>
)

export default Intro