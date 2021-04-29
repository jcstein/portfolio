module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"googleAnalytics":{"trackingId":"G-NP4N9RF8TG","cookieName":"gatsby-gdpr-google-analytics","anonymize":true,"allowAdFeatures":false},"environments":["production"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Josh Stein | Portfolio","short_name":"js.","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"content/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"9b0f0d2fa7e1a87152756063bf4fa341"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"quality":80}}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
