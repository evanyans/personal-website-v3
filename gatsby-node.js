const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const articles = result.data.allDatoCmsArticle.nodes;

  articles.forEach(article => {
    createPage({
      path: `/writing/${article.slug}/`,
      component: path.resolve("./src/pages/writing/template.js"),
      context: {
        slug: article.slug,
      },
    });
  });
};