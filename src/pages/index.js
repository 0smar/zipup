import React from 'react'

import Intro from '../components/Intro';
import About from '../components/About';
import MeetSofi from '../components/Sofi';
import Press from '../components/Press';
import Newsletter from '../components/news';

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
