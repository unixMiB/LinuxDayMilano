module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter Kowalski7cc',
        description: 'Kowalski7cc Gatsby starter with cherrypicked components',
        keywords: 'gatsby, kowalski7cc, starter',
        author: 'Kowalski7cc <kowalski.7cc@gmail.com>',
        theme: '#343a40',
        navbarVariant: 'dark',
        siteUrl: 'https://gatsby-starter-kowalski7cc.netlify.com/'
    },
    plugins: ['gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Kowalski7cc",
                short_name: "Kowalski",
                start_url: "/",
                description: 'Kowalski7cc Gatsby starter',
                background_color: "#ffffff",
                theme_color: "#343a40",
                display: "standalone",
                icon: './src/assets/favicon.png'
            },
        },
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: "./src/assets/favicon.png",
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: true,
                    favicons: true,
                    firefox: true,
                    opengraph: true,
                    twitter: true,
                    yandex: true,
                    windows: true
                }
            }
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{
                    userAgent: '*',
                    allow: '/'
                }]
            }
        },
        'gatsby-plugin-sitemap',
        'gatsby-plugin-react-svg',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                useMozJpeg: true,
                stripMetadata: true,
                defaultQuality: 70
            }
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 600,
                        linkImagesToOriginal: true,
                        sizeByPixelDensity: true,
                        quality: 70,
                        withWebp: true
                    },
                },],
            },
        },
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    '/sw.js': [
                        'Cache-Control: no-cache'
                    ]
                },
                mergeSecurityHeaders: true,
                mergeLinkHeaders: true,
                mergeCachingHeaders: true,
            }
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: 'gray',
                showSpinner: false,
            },
        }
    ],
}