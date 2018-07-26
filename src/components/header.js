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
  margin-bottom: 1.45rem;
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
      <Link to="#conocenos">Conócenos</Link>
      <Link to="#sofi">Sofi</Link>
      <Link to="#prensa">Prensa</Link>
      <Link to="#comienza" className="bubble bubble__right bubble__right--orange">Comienza</Link>
    </HeaderLinks>
  </HeaderWrapper>
)

export default Header
