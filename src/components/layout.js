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
// import { Link } from "gatsby"
import "../styles/index.css";
// import Header from "./header"
import "./layout.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer"


const Layout = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query ProjectSiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar/>
          <main className={className} style={{marginTop: "102.65px"}}>
            {children}
          </main>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
