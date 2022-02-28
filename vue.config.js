const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Open Sans' },
        ],
      }),
    ],
  },
};
