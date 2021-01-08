const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Linux Day Milano",
    description:
      "Manifestazione italiana dedicata a GNU/Linux, al software libero, alla cultura aperta e alla condivisione.",
    keywords:
      "Linux Day, Milano, 2019, GNU, GNU/Linux, Open Source, Software Libero, Condivisione",
    author: "unixMiB (https://unixmib.org)",
    theme: "#343a40",
    navbarVariant: "dark",
    siteUrl: "http://linuxdaymilano.org/",
    switches: {
      schedule: true,
      cfp: false,
    },
    event: {
      date: new Date("2019-10-26"),
      time: "9:30",
      topic: "al mondo dell'Intelligenza Artificiale",
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
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-preact",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Linux Day Milano",
        short_name: "LDMI",
        start_url: "/",
        description: "Manifestazione italiana dedicata a GNU/Linux",
        background_color: "#fee900",
        theme_color: "#343a40",
        display: "standalone",
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
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
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
