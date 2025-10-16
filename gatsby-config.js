const path = require("path");
const fs = require("fs");

function getCurrentBranchName(p = process.cwd()) {
  const gitHeadPath = `${p}/.git/HEAD`;

  return fs.existsSync(p)
    ? fs.existsSync(gitHeadPath)
      ? fs.readFileSync(gitHeadPath, "utf-8").trim().split("/")[2]
      : getCurrentBranchName(path.resolve(p, ".."))
    : false;
}

const branch = getCurrentBranchName() || "master";
const prod = branch === "master";

module.exports = {
  siteMetadata: {
    title: prod ? "Linux Day Milano" : "Linux Day Milano (" + branch + ")",
    description:
      "Manifestazione italiana dedicata a GNU/Linux, al software libero, alla cultura aperta e alla condivisione.",
    keywords:
      "Linux Day, Milano, GNU, GNU/Linux, Open Source, Software Libero, Condivisione",
    author: "ILS Milano (https://poul.org/)",
    theme: "#343a40",
    navbarVariant: "dark",
    siteUrl: "https://linuxdaymilano.org/",
    switches: {
      schedule: true,
      cfp: false,
      cfp_submit: false,
      stand_submit: false,
      sponsor_submit: true,
      year_switcher: true,
      sponsors: true,
    },
    event: {
      date: new Date("2025-10-25"),
      time: "9:00",
      organizer: "POuL",
      topic: "",
      cfp: "https://survey.linux.it/index.php/653441?lang=it",
      cfs: "https://survey.linux.it/index.php/511682?lang=it",
      sponsor: "https://www.ils.org/sponsorizzazioni/",
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
      email: "linuxday@unixmib.org",
      website: "https://poul.org/",
      place: {
        name: "Politecnico di Milano, Campus Leonardo",
        street: "Piazza Leonardo da Vinci, 32",
        building: "Edificio 3 - Campus Leonardo",
        cap: "20133 Milano MI",
      },
    },
  },
  graphqlTypegen: true,
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
        name: prod ? "Linux Day Milano" : "Linux Day Milano (" + branch + ")",
        short_name: prod ? "LDMI" : "LDMI λ",
        start_url: "/",
        lang: "it",
        icon_options: {
          purpose: "any",
        },
        description: "Sito ufficiale del Linux Day Milano",
        background_color: "#212529",
        theme_color: "#212529",
        display: "minimal-ui",
        icon: "./src/assets/favicon_foot_transparent.svg",
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
        name: "images",
        path: path.join(__dirname, "src", "assets", "images"),
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
        //mergeLinkHeaders: true,
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
