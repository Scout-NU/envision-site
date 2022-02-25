<h1 align="center">
  Envision Site
</h1>

## Table of Contents:

1. [Developers](#developers)
2. [Getting Started Developing](#getting-started-developing)
3. [Deployment With Netlify](#deploy-with-netlify)
4. [Prismic](#prismic)
5. [Gatsby](#gatsby)
6. [Config Files](#config-files)
7. [Dependencies](#dependencies)

## Developer

- Sam Gildea: Tech Lead

## Getting Started Developing

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd envision-site/
    npm install
    gatsby develop
    ```

## Deploy With Netlify

1. Login into Netlify
2. Create a new site from git
3. Link to Your GitHub
4. Authorize Netlify
5. Select Your Repo
6. Configure Your Settings
7. Build Site

## Prismic

Prismic is a Headless CMS that is a tool for managing and updating all the content on the site.

To automatically deploy on Netlify when Prismic is updated you must add webhooks. Learn more about webhooks with Prismic and Netlify [here](https://prismic.io/docs/technologies/deploy-gatsby).

## Gatsby

Gatsby is a React-based open-source framework for creating websites and apps.

## Config Files

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: Information about the Envision Site

## Dependencies

- styled-components
- gatsby-source-prismic
