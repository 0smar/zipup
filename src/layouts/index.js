import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/ft';

import pattern from '../images/pattern.svg'

import './index.scss';
import '../styles/main.scss';

import favicon from '../images/favicon.png'

class Layout extends React.Component{

  render() {
    const { children, data } = this.props;

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <img src={pattern} alt="green figure" className="bg-pattern" />
          {children()}
        </div>
        <Footer />
      </div>
    )
  }
}

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
