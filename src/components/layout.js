/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1056,
          padding: `5rem 1rem 2rem`
        }}
      >
        <main>{children}</main>
        <footer
          className="small"
          style={{
            marginTop: `2rem`
          }}
        >
          <hr />© {new Date().getFullYear()}, Designed and built by
          {` `}
          <a
            href="https://twitter.com/pizza0502"
            target="_blank"
            rel="noreferrer noopener"
          >
            Pizza Yap
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
