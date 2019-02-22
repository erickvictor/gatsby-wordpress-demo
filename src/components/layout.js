import React from "react"

//import Header from "./header"
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }      
          }
        }
      }
    `} render={props => <Helmet><link rel='shortcut icon' href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /> </Helmet>} />
    <div>
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </div>
  </>
)

export default Layout
