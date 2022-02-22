module.exports = {
  siteMetadata: {
    title: `Graasp Climate`,
    description: `Landing page for the Graasp suite of applications on climate change`,
    author: { name: `Graasp` },
    keywords: [
      'education',
      'graasp',
      'climate change',
      'interactive applications',
      'simulations',
      'physics',
      'chemistry',
    ],
    siteUrl: 'https://climate.graasp.org',
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
