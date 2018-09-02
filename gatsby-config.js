module.exports = {
  siteMetadata: {
    title: 'DDI Capital',
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Ubuntu Mono',
          'Lato',
          'Open Sans',
        ],
      },
    },
    /* {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    }, */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
