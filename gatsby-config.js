const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Linux Day Milano",
    description:
      "Manifestazione italiana dedicata a GNU/Linux, al software libero, alla cultura aperta e alla condivisione.",
    keywords:
      "Linux Day, Milano, 2022, GNU, GNU/Linux, Open Source, Software Libero, Condivisione",
    author: "unixMiB (https://unixmib.org)",
    theme: "#343a40",
    navbarVariant: "dark",
    siteUrl: "http://linuxdaymilano.org/",
    switches: {
      schedule: false,
      cfp: false,
      sponsor_submit: false,
      year_switcher: true,
    },
    event: {
      date: new Date("2022-10-22"),
      time: "9:30",
      topic: null,
      cfp: "https://forms.gle/koz5Hmo4mwqFvuB77",
      arguments: [
        "Linux, software e hardware Open Source",
        "Open Source nel mondo dell'istruzione",
        "Alternative open a software proprietari",
        "Innovazione nel mondo dell'Open Source",
        "L'apprendimento mediante il Do It Yourself",
        "Programmazione e tecniche di sviluppo",
      ],
    },
    contacts: {
      email: "unixmib@gmail.com",
      website: "https://unixmib.org",
      place: {
        name: "Università Milano Bicocca",
        street: "Via Bicocca degli Arcimboldi 8",
        building: "Edificio U7",
        cap: "20126 Milano MI",
      },
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://linuxdaymilano.org/",
      },
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Linux Day Milano",
        short_name: "LDMI",
        start_url: "/",
        lang: "it",
        icon_options: {
          purpose: "any maskable",
        },
        description: "Sito ufficiale del Linux Day Milano",
        background_color: "#fee900",
        theme_color: "#343a40",
        display: "minimal-ui",
        icon: "./src/assets/favicon.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "brands",
        path: path.join(__dirname, "src", "assets", "brands"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "schedules",
        path: path.join(__dirname, "src", "schedules"),
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        recachePages: [`/`, `/schedule`, `/404`],
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: true,
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/sw.js": ["Cache-Control: no-cache"],
          "/*": [
            "Permissions-Policy: autoplay=(),camera=(),fullscreen=(self),geolocation=(),microphone=(),payment=()",
            "Strict-Transport-Security: max-age=63072000; includeSubdomains; preload",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: no-referrer",
          ],
        },
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "gray",
        showSpinner: false,
      },
    },
  ],
};
