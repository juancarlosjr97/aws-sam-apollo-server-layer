const webpackConfiguration = require("./webpack.config");

module.exports = {
  ...webpackConfiguration,
  watch: true,
  mode: "development",
  watchOptions: {
    ignored: /node_modules/,
  },
};
