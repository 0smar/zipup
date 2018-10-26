import React from 'react'
import sofi from '../images/sofi.png'
import appstore from '../images/appstore.png'
import playstore from '../images/googleplay.png'

const Newsletter = () => (
  <div className="register-section" id="comienza">
    <div className="invite">
      <div className="header">
        <div className="bubble bubble__right bubble__right--orange">
          ¿Listo para cambiar tu vida?
        </div>
      </div>
    </div>
    <div className="newsletter">
      <div className="column-container">
        <p className="description">
          Sé el primero en enterarte de las últimas noticias sobre ZipUp además de tips que te ayudarán a tener una vida más sana.
        </p>
        <form name="contact" method="POST" data-netlify="true">
          <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
          <button type="submit">Enviar</button>
        </form>
        {/* <div className="stores">
          <h3>PRÓXIMAMENTE</h3>
          <div className="store-img">
            <img src={appstore} alt="" />
            <img src={playstore} alt=""/>
          </div>
        </div> */}
      </div>
      <img src={sofi} alt="Sofi te invita" />
    </div>
  </div>
)

export default Newsletter
