/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { StaticQuery, graphql } from "gatsby"
 import Helmet from "react-helmet";
//  import Header from "../header"
 import "../layout.css"
 import Navbar from "../navbar";
 import Footer from "../footer";
 
 const Layout = ({ disableNavbarFixed, disableNavbar, className, children, meta }) => (
   <StaticQuery
     query={graphql`
       query SiteTitleQuery {
         site {
           siteMetadata {
             title
             description
            #  preview
             author
             siteUrl
           }
         }
       }
     `}
     render={data => (
       <>
         <Helmet>
             <title>{meta.title || data.site.siteMetadata.title}</title>
             {meta.technologies && <meta name="keywords" content={["coding tutorial", "coding project", "coding project", "breathecode", "freecodecamp"].concat(meta.technologies.join(","))}></meta>}
             <meta name="description" content={meta.description || data.site.siteMetadata.description} />
             <meta property="og:site_name" content={data.site.siteMetadata.title}></meta>
             <meta name="twitter:image:alt" content={data.site.siteMetadata.title}></meta>
             <meta itemprop="image" content={meta.preview || data.site.siteMetadata.preview}/>
             { meta.url && <meta property="og:url" content={meta.url} /> }
             { meta.url && <link rel="canonical" href={meta.url} /> }
             <meta property="og:type"               content="article" />
             <meta property="og:title"              content={meta.title || data.site.siteMetadata.title} />
             <meta property="og:description"        content={meta.description || data.site.siteMetadata.description} />
             <meta property="og:image"              content={meta.preview || data.site.siteMetadata.preview} />
             <meta name="twitter:title" content={meta.title || data.site.siteMetadata.title} />
             <meta name="twitter:description" content={meta.description} />
             <meta name="twitter:image" content={meta.preview || data.site.siteMetadata.preview} />
             <meta name="twitter:card" content="summary_large_image" />
             <meta name="twitter:site" content="@alesanchezr" />
         </Helmet>

         {disableNavbar ? null : <Navbar disableNavbarFixed={disableNavbarFixed} />}
          <main className={className} style={{marginTop: "125px"}}>
            {children}
          </main>
         <Footer />
       </>
     )}
   />
 )
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
   meta: PropTypes.object.isRequired,
 }
 Layout.defaultProps = {
   meta: {},
 }
 
 export default Layout
 