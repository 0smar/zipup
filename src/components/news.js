import React from 'react'
import SofiWink from '../images/SofiWink.svg'

const Newsletter = () => (
  <div className="register-section" id="start">
    <div className="squircle" />
    <div className="circle" />
    <div className="content">
      <div className="form-content">
        <h1>¡Cambia tu vida <span className="highlight-text">ahora</span>!</h1>
        <p>Regístrate para ser de los primeros en poder descargar la app, te noficaremos muy pronto cuando esté disponible.</p>
        <form name="contact" method="POST" data-netlify="true">
          <input type="text" name="name" placeholder="¿Cómo te llamas?" />
          <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
          <button className="button action-button" type="submit">Enviar</button>
        </form>
      </div>
      <img src={SofiWink} className="sofi-wink" alt="Sofi está lista para ayudarte"/>
    </div>
  </div>
)

export default Newsletter;
