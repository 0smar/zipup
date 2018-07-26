import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import greenblob from '../images/green-blob.svg'
import mockup from '../images/phone-mock.png'
import sofi from '../images/sofi.png'

import orangeblob from '../images/orange-blob.svg'
import chaticon from '../images/icon-1.svg'
import planicon from '../images/icon-2.svg'
import hearticon from '../images/icon-3.svg'

import sofibg from '../images/sofi-bg.svg'
import sofis from '../images/sofis.svg'

import orangecircle from '../images/orange-circle.svg'

import cnn from '../images/cnn.png'
import milenio from '../images/milenio.png'


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
      </div>
      <div className="mockup">
        <img src={sofi} alt="Sofi, tu asistente nutricional" className="sofi" />
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
      <p>
        ZipUp te enseñará a llevar una vida saludable. Y ellos lo saben.
      </p>
      <div className="press-grid">
        <div className="press">
          <img src={cnn} alt="CNN" />
        </div>
        <div className="press">
          <img src={milenio} alt="Grupo Milenio" />
        </div>
        <div className="press">
          <img src={cnn} alt="CNN" />
        </div>
        <div className="press">
          <img src={milenio} alt="Grupo Milenio" />
        </div>
        <div className="press">
          <img src={cnn} alt="CNN" />
        </div>
        <div className="press">
          <img src={milenio} alt="Grupo Milenio" />
        </div>
        <div className="press">
          <img src={cnn} alt="CNN" />
        </div>
        <div className="press">
          <img src={milenio} alt="Grupo Milenio" />
        </div>
      </div>
    </div>
    <div className="register-section" id="comienza">
      <div className="invite">
        <img src={sofi} alt="Sofi te invita" />
        <div class="header">
          <div className="bubble bubble__right bubble__right--orange">
            ¿Listo para cambiar tu vida?
          </div>
          <p>
            Regístrate en nuestro boletín y recibe las últimas noticias sobre ZipUp además de tips que te ayudarán a tener una vida más sana.
          </p>
        </div>
      </div>
      <div className="newsletter">
        <form name="contact" method="POST" data-netlify="true">
          <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
          <button type="submit">Enviar</button>
        </form>
        
      </div>
    </div>
  </div>
)

export default IndexPage
