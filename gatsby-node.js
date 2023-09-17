/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://linuxdaymilano.netlify.com/*",
    toPath: "https://linuxdaymilano.org/:splat",
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  });

  // TODO: Improve me
  createRedirect({
    fromPath: "https://linuxdaymilano.org/2022",
    toPath: "https://linuxdaymilano.org/schedule?year=2022",
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  });

  createRedirect({
    fromPath: "https://linuxdaymilano.org/2019",
    toPath: "https://linuxdaymilano.org/schedule?year=2019",
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  });

  createRedirect({
    fromPath: "https://linuxdaymilano.org/2018",
    toPath: "https://linuxdaymilano.org/schedule?year=2018",
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  });
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadataEvent implements Node {
      topic: String
    }
  `;
  createTypes(typeDefs);
};
