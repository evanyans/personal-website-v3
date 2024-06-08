/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `personal-website-v3`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "8c7a783037c7a4bf897b68197e3583"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss",
  {
    resolve: 'gatsby-plugin-react-leaflet',
    options: {
      linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
    }
  }

]
};