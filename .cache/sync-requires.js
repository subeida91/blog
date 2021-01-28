const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog/src/pages/404.js"))),
  "component---src-templates-all-posts-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog/src/templates/allPosts.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog/src/templates/singlePost.js")))
}

