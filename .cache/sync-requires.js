const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/joshuastein/Documents/GitHub/portfolio/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/joshuastein/Documents/GitHub/portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/joshuastein/Documents/GitHub/portfolio/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/joshuastein/Documents/GitHub/portfolio/src/pages/privacy.js")))
}

