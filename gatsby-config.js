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
          'Lato',
          'Ubuntu Mono',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
