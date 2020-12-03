module.exports = {
  siteMetadata: {
    title: `Periodic Table Style iOS 14 Icons`,
    description: `It’s a perfect time to give your iOS 14 home screen a clean and ultra-minimalist look.`,
    author: `@pizza0502`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Inter`],
    //     display: "swap"
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Droid Sans", "Droid Serif"]
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Periodic Table Style iOS 14 Icons`,
        short_name: `pts`,
        start_url: `/`,
        background_color: `#0d1a26`,
        theme_color: `#0d1a26`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
