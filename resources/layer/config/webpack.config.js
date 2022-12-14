const fs = require("fs");
const path = require("path");

const rootDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(rootDirectory, relativePath);

module.exports = {
  entry: resolvePath("src/index.ts"),
  output: {
    path: path.join(__dirname, "..", "build/layer"),
    filename: "index.js",
    libraryTarget: "commonjs",
    clean: true,
  },
  target: "node",
  mode: "production",
  optimization: {
    minimize: true,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
