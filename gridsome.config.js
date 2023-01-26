const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Dwagon | $Dwagon is no longer a baby. It has grown and no longer needs daddy. $Dwagon will keep loyal to its community, including V1 holders.`,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/favicon.svg',
    touchicon: './src/favicon.svg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: [
    'gridsome-plugin-robots',
    '@gridsome/plugin-sitemap',
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM',
        enabled: true,
        debug: true,
      },
    },
  ],
};
