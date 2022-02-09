module.exports = {
  siteMetadata: {
    title: `Graasp Climate`,
    description: `Landing page for the Graasp suite of applications on climate change`,
    author: `Hagop Taminian`,
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
