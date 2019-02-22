import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const LogoWrapped = styled.div`
  margin: auto 0;
`

const LogoImg = styled.img`
  width: 70px;
  padding: 16px;
`

const Logo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpLogo{
        edges{
          node{
            url {
              source_url
            }
          }
        }
      }
  }
  `} render={props => (
    <LogoWrapped>
      <LogoImg src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Logo" />
    </LogoWrapped>
  )} />
)

export default Logo
