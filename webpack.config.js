const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function buildWebpackConfig(options) {
  const { paths } = options;
  return {
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.outputFolder,
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.templateHtml,
      }),
    ],
  };
}

module.exports = () => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.js"),
    outputFolder: path.resolve(__dirname, "dist"),
    templateHtml: path.resolve(__dirname, "public", "index.html"),
  };
  const config = buildWebpackConfig({ paths });
  return config;
};
