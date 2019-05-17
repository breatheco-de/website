/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import "bootstrap/dist/css/bootstrap.css";
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../styles/index.css";

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
     
          <main>{children}</main>
          <footer className="text-center gradientFooter pt-5 mt-5">
            © {new Date().getFullYear()}, Built By  
            {` `}
            <Link to="/">BreatheCode</Link>
          </footer>
       
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
