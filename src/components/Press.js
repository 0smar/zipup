import React from 'react'

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

const Press = () => (
  <div className="press-section content" id="press">
    <h1>
      Ellos <span className="highlight-text">ya nos conocen</span>. ¿Y tú, qué esperas?
    </h1>
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
)

export default Press;