module.exports = {
  //-- SITE SETTINGS -----
  author: "joshcs.eth",
  siteTitle: "joshcs.eth",
  siteShortTitle: "joshcs", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi, I specialize in lightweight, functional Web3 design. I'm currently building web experiences that are designed to reduce waste and help people around the globe.",
  siteUrl: "https://jcstein.dev",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Welcome to my portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "G-NP4N9RF8TG", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@jcstein}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jcstein",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/joshcstein/",
    },
    {
      name: "Github",
      url: "https://github.com/jcstein",
    },
    {
      name: "Crypto Coffee",
      url:
        "https://www.buymeacryptocoffee.xyz/0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/joshuastein",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/JoshCStein",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Blog",
        url: "https://blog.jcstein.dev",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
      {
        name: "Crypto Coffee",
        url:
          "https://www.buymeacryptocoffee.xyz/0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "Josh_Stein_Resume.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Blog",
      url: "https://blog.jcstein.dev",
    },
    {
      name: "Crypto Coffee",
      url:
        "https://www.buymeacryptocoffee.xyz/0x186ea56f0a40c5593a697b3e804968b8c5920ff3",
    },
    {
      name: "Privacy",
      url: "/privacy",
    },
  ],
}
