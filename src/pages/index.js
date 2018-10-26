import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import greenblob from '../images/green-blob.svg'
import mockup from '../images/dark.png'
import sofi from '../images/sofi.png'
import sofigif from '../images/sophie.gif'

import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Linkedin from '../images/linked.svg'

import orangeblob from '../images/orange-blob.svg'
import chaticon from '../images/icon-1.svg'
import planicon from '../images/icon-2.svg'
import hearticon from '../images/icon-3.svg'

import sofibg from '../images/sofi-bg.svg'
import sofis from '../images/sofis.png'

import orangecircle from '../images/orange-circle.svg'
import circleBg from '../images/circle-bg.svg'

import cnn from '../images/cnn.png'
import milenio from '../images/milenio.png'
import tele from '../images/tele.png'
import azteca from '../images/azteca.png'
import ent from '../images/ent.png'
import tec from '../images/tec.png'
import camp from '../images/camp.png'
import cog from '../images/cog.jpg'
import info from '../images/inf.png'
import eco from '../images/eco.png'
import dis from '../images/dis.png'
import w from '../images/w.png'


const ActionButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  a{
    padding: 16px;
    width: 50%;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: all 0.2s ease-out;
    &:first-of-type{
      background-color: var(--green);
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      color: #fff;
      text-decoration: none;
      &:hover{
        box-shadow: 0 5px 15px -3px var(--green);
        background-color: var(--light-green);
      }
    }
    &:last-of-type{
      background-color: var(--gray);
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      color: #fff;
      text-decoration: none;
      &:hover{
        box-shadow: 0 5px 15px -3px var(--gray);
        background-color: var(--light-gray);
      }
    }
  }

  @media only screen and (max-width: 768px){
    width: 90%;
  }
  @media only screen and (max-width: 550px){
    width: 100%;
  }
`

const IndexPage = () => (
  <div className="column-container">
    <div className="intro-section">
      <img src={greenblob} alt="green figure" className="green-blob" />
      <div className="column-container description">
        <h1>Come lo que quieras de una manera inteligente</h1>
        <p>
          Conoce a Sofi, la asistente nutricional que te dará información indicada al momento sobre lo que comes y cómo alcanzar tus objetivos.
        </p>
        <ActionButtons>
          <Link>Habla con Sofi</Link>
          <Link>Regístrate</Link>
        </ActionButtons>
        <div className="social-media">
          <Link to="/">
            <img src={Twitter} alt="ZipUp Twitter" />
          </Link>
          <Link to="/">
            <img src={Instagram} alt="ZipUp Instragram" />
          </Link>
          <Link to="/">
            <img src={Linkedin} alt="ZipUp Linkedin" />
          </Link>
        </div>
      </div>
      <div className="mockup">
        &nbsp;
        <img src={sofigif} alt="Sofi, tu asistente nutricional" className="sofi" />
        <img src={mockup} alt="ZipUp imagen de aplicación móvil" className="mock" />
      </div>
    </div>
    <div className="about-section" id="conocenos">
      <img src={orangeblob} alt="orange figure" className="orange-blob" />
      
      <h2>¿Qué es ZipUp?</h2>
      <p>Somos la aplicación que te ayudará a llevar una vida sana y encontrar un balance en tu día a día. Nuestra asistente inteligente, Sofi, te dará recomendaciones en base a tu estilo de vida y a lo que hayas comido durante el día. Todo para seguir con tus metas. </p>
      <div className="steps-grid">
        <div className="step">
          <img src={chaticon} alt="Platica con Sofi" />
          <p>
            Habla con Sofi sobre tus rutinas y lo que has comido durante el día.
          </p>
        </div>
        <div className="step">
          <img src={planicon} alt="Ella generará tu plan" />
          <p>
            Sofi ajustará tu plan y te dirá qué tienes que hacer para no salirte de control.
          </p>
        </div>
        <div className="step">
          <img src={hearticon} alt="Comienza una mejor vida" />
          <p>
            Sigue tu progreso y aprende a llevar una vida saludable y sin reestricciones.
          </p>
        </div>
      </div>
      <div className="video-section">
        <div className="description">
          <img src={circleBg} alt="" className="circle-bg"/>
          <h2 className="green">¡Cambia tu vida con ZipUp!</h2>
        </div>
        <div className="video-container">
          <iframe width="520" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
      </div>
    </div>
    <div className="sofi-section" id="sofi">
      <img src={sofibg} className="faces-bg" />
      <div className="sofi-faces">
        <img src={sofis} alt="Emociones de Sofi" />
      </div>
      <div className="description">
        <h2>Ella es Sofi</h2>
        <p>
          Sofi es la asistente personal que te ayudará a saber si lo que estás comiendo es correcto o no para tu dieta. Es inteligente y aprenderá sobre ti y lo que te gusta.
          <br/> <br/>
          Sofi te dará consejos para que sigas en el buen camino y cumplas tus metas basándose en 3 aspectos importantes:
        </p>
        <ul>
          <li>Plan Alimenticio</li>
          <li>Actividad Física</li>
          <li>Presupuesto</li>
        </ul>
      </div>
    </div>
    <div className="demo-section" id="demo">
      <img src={orangecircle} className="orange-circle" alt="Círculo Naranja" />
      <div className="demo-container">
        <img src={mockup} className="mockup" alt="Demo de ZipUp" />
        <div className="bubble bubble__left bubble__left--orange">
          Habla con Sofi
        </div>
        <div className="bubble bubble__right bubble__right--green">
          Sofi analiza lo que le dices y hace los cálculos necesarios para darte información adecuada.
        </div>
      </div>
    </div>
    <div className="press-section" id="prensa">
      <h2>
        Ellos ya nos conocen. ¿Y tú, qué esperas para cambiar tu vida?
      </h2>
      <div className="press-grid">

          <div className="press hvr">
              <a href="#">
                  <img src={cnn} alt="CNN" />
              </a>
          </div>

          <div className="press hvr">
              <a href="http://www.milenio.com/negocios/gana-proyecto-dietas-hackathon-campus-party">
                  <img src={milenio} alt="Grupo Milenio" />
              </a>
          </div>

          <div className="press hvr">
              <a href="https://noticieros.televisa.com/historia/los-numeros-jalisco-campus-party-2017/">
                <img src={tele} alt="Televisa" />
              </a>
          </div>


          <div className="press hvr">
              <a href="#">
                  <img src={azteca} alt="Tv Azteca" />
              </a>
          </div>

          <div className="press hvr">
                <a href="https://www.entrepreneur.com/article/296997">
                    <img src={ent} alt="Enterpeneur" />
                </a>
          </div>

          <div className="press hvr">
              <a href="https://tecreview.tec.mx/app-reduce-obesidad-gana-hackathon-en-campus-party/">
                  <img src={tec} alt="Tecnológico de Monterrey" />
              </a>
          </div>


        <div className="press hvr">
            <a href="#">
                <img src={camp} alt="Campus Party" />
            </a>
        </div>

        <div className="press hvr">
            <a href="https://www.informador.mx/Tecnologia/Aplicacion-para-dietas-gana-el-Hackathon-20170710-0146.html">
                <img src={info} alt="El Informador" />
            </a>
        </div>


        <div className="press hvr">
            <a href="#">
                <img src={eco} alt="El Economista" />
            </a>
        </div>

        <div className="press hvr">
            <a href="#">
                <img src={dis} alt="Disruptivo Tv" />
            </a>

        </div>

        <div className="press hvr">
            <a href="http://wradio.com.mx/programa/2017/07/14/educacion_xxi/1499994900_316980.html">
                <img src={w} alt="W Radio" />
            </a>
        </div>

        <div className="press hvr">
            <a href="https://www.cognitiva.la/blog/vertical-de-inteligencia-artificial-impulsa-la-adopcion-de-watson-en-talenthackathon-de-campusparty-mexico-2/">
                <img src={cog} alt="Cognitiva" />
            </a>
        </div>


      </div>
    </div>
  </div>
)

export default IndexPage
