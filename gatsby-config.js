module.exports = {
  siteMetadata: {
    title: `BreatheCode`,
    description: `BreatheCode's mission is to accelerate the way junior developers learn and evolve using technology.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/breathecode.32.png`, // This path is relative to the root of the site.
      },
    },
   {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-574Z6C5",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // Specify optional GTM environment details.
      gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
      gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      dataLayerName: "YOUR_DATA_LAYER_NAME",
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
