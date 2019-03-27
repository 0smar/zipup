import React from 'react';

import chaticon from '../images/icon-1.svg'
import planicon from '../images/icon-2.svg'
import hearticon from '../images/icon-3.svg'
import PatternVideo from '../images/pattern-video.svg'

const About = () => (
  <div className="about-section content" id="about">
    <div className="description">
      <h1>¿Qué es <span className="highlight-text">ZipUp</span>?</h1>
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
          <img src={hearticon} alt="Comienza una mejor vida" className="heart-icon" />
          <p>
            Sigue tu progreso y aprende a llevar una vida saludable y sin reestricciones.
          </p>
        </div>
      </div>
    </div>
    <div className="video-section">
      <img src={PatternVideo} alt="" className="pattern-video"/>
      <div className="video-container">
        <iframe src="https://www.youtube.com/embed/wqqJ-5bZvi8" allowFullScreen></iframe>
      </div>
    </div>
  </div>
)

export default About;