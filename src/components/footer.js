import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../images/logo.png'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Facebook from '../images/facebook.svg'
import Linkedin from '../images/linked.svg'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30vh;
  padding-bottom: 2em;
  width: 90%;
  max-width: 800px;
  @media only screen and (max-width: 768px){
    margin-top: 15vh;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(245, 163, 32, 1);
  padding-bottom: 1em;
  margin-bottom: 1em;
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    img{
      width: 20px;
      margin-bottom: 0;
    }
  }

`

const ImportantLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  a{
    text-decoration: none;
    font-size: 14px;
    color: var(--text);
  }
  .footer-logo{
    width: 150px;
    margin: 0 auto;
  }
`

const Legal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  a{
    text-decoration: none;
    color: #212121;
  }
  .row{
    a{
      margin-right: 2em;
    }
  }
  @media only screen and (max-width: 550px){
    .row{
      display: flex;
      flex-direction: column !important;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <Row>
      <ImportantLinks>
        <img src={Logo} alt="ZipUp Logo" className="footer-logo" />
      </ImportantLinks>
      <br />
      <SocialMedia>
        <a href="https://facebook.com/zipupapp" target="_blank">
          <img src={Facebook} alt="ZipUp Twitter" />
        </a>
        <a href="https://instagram.com/zipupapp" target="_blank">
          <img src={Instagram} alt="ZipUp Instragram" />
        </a>
        <a href="https://twitter.com/zipupapp" target="_blank">
          <img src={Twitter} alt="ZipUp Twitter" />
        </a>
      </SocialMedia>
    </Row>
    <Legal>
      <div className="row">
        <Link>Términos y Condiciones</Link>
        <Link>Aviso de Privacidad</Link>
      </div>
      <div>ZipUp © 2019</div>
    </Legal>
  </FooterWrapper>
)

export default Footer