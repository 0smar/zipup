import React from 'react'

import Intro from '../components/Intro.js';
import About from '../components/About.js';
import MeetSofi from '../components/Sofi.js';
import Press from '../components/Press.js';
import Newsletter from '../components/Newsletter.js';

const IndexPage = () => (
  <div className="column-container">
   
    <Intro />
    <About />
    <MeetSofi />
    <Press />
    <Newsletter />

  </div>
)

export default IndexPage
