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
          about: {},

        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};
