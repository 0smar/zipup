import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import Header from '../components/header';
import Footer from '../components/footer';
import './index.scss';
import '../styles/main.scss';

const YieldContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 6%;
  margin-bottom: 1.45rem;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <YieldContent>
      {children()}
    </YieldContent>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
