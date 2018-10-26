import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../images/logo.png'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Linkedin from '../images/linked.svg'

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25vh;
    padding-bottom: 2em;
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
            width: 30px;
        }
    }

    @media only screen and (max-width: 768px){
        margin-bottom: 2em;
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
        width: 220px;
        margin: 0 auto;
    }
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <ImportantLinks>
      <img src={Logo} alt="ZipUp Logo" className="footer-logo" />
    </ImportantLinks>
    <br />
    <SocialMedia>
      <Link to="/">
        <img src={Twitter} alt="ZipUp Twitter" />
      </Link>
      <Link to="/">
        <img src={Instagram} alt="ZipUp Instragram" />
      </Link>
      <Link to="/">
        <img src={Linkedin} alt="ZipUp Linkedin" />
      </Link>
    </SocialMedia>
    <br />
    <ImportantLinks>
      <Link>Términos y Condiciones</Link>
      <Link>Aviso de Privacidad</Link>
    </ImportantLinks>
  </FooterWrapper>
)

export default Footer