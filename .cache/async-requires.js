// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-all-posts-js": () => import("./../src/templates/allPosts.js" /* webpackChunkName: "component---src-templates-all-posts-js" */),
  "component---src-templates-single-post-js": () => import("./../src/templates/singlePost.js" /* webpackChunkName: "component---src-templates-single-post-js" */)
}

