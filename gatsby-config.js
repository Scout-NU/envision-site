require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `envision`,
        accessToken: process.env.PRISMIC_KEY,
        schemas: {
          homepage: require("./schemas/homepage.json"),
          about: require("./schemas/about.json"),
          portfolio: {},
          cohort: {},
          partners_page: require("./schemas/partners.json"),
          accelerator: {}

        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
