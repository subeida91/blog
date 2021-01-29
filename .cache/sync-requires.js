const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog copy/src/pages/404.js"))),
  "component---src-templates-all-posts-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog copy/src/templates/allPosts.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/subeidaahmed/Desktop/simple-mdx-blog copy/src/templates/singlePost.js")))
}

