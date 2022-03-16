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
        accessToken: `MC5ZaEFWVUJFQUFDRUFWeGVh.C--_vU0CUF1477-977-977-977-977-9Ju-_ve-_vQEa77-977-977-977-977-977-977-9Ye-_ve-_ve-_ve-_vVgN77-9`,
        schemas: {
          homepage: require("./schemas/homepage.json"),
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
