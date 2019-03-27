import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../images/logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 4%;
  @media only screen and (max-width: 550px){
    padding: 0 2%;
  }
`

const HeaderLogo = styled.div`
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 200px;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 550px){
      a{
        img{
          width: 180px;
        }
      }
  }
`

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a{
    text-decoration: none;
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 16px;
    color: #212121;
    margin-left: 50px;
  }

  @media only screen and (max-width: 550px){
    a{
      display: none;
      &:last-of-type{
        display: flex;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderLogo>
      <Link to="/">
        <img src={Logo} alt="ZipUp Logo" />
      </Link>
    </HeaderLogo>

    <HeaderLinks>
      <a href="#about">Conócenos</a>
      <a href="#sofi">Sofi</a>
      <a href="#press">Prensa</a>
      <a href="#start" className="button action-orange">Comienza</a>
    </HeaderLinks>
  </HeaderWrapper>
)

export default Header
