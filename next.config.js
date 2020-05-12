const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withSass = require("@zeit/next-sass");
const tailwindCSS = require("tailwindcss");


module.exports = withSass(withCSS(
  withFonts({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

      config.module.rules.push({
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: [tailwindCSS("./tailwind.config.js")]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      });

      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;

    }
  })
));