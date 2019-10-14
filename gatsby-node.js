/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: 'https://linuxdaymilano.netlify.com/*',
    toPath: 'https://linuxdaymilano.org/:splat',
    redirectInBrowser: true,
    isPermanent: true,
    force: true,
  })
}
