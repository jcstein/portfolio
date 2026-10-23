const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  googleAnalyticsTrackingId,
  colors,
} = require(`./config`)

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    author: author,
    title: siteTitle,
    description: siteDescription,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: googleAnalyticsTrackingId,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
          allowAdFeatures: false,
        },
        environments: ["production"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        background_color: colors.lightTheme.background,
        theme_color: colors.lightTheme.primary,
        display: `standalone`,
        icon: siteIcon,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
