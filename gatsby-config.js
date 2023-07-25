/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Americana Restaurant - Las Vegas, NV",
    url: "https://americanalasvegas.com",
    siteUrl: "https://americanalasvegas.com/",
    description:
      "Americana Restaurant is a fine dining restaurant located in Las Vegas, NV 89135. We offer a wide variety of dishes for Lunch and Dinner.",
    image: "/meta-cover.png",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
