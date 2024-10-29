// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
  ],
  module : {
    rules: [
        {
            test: /\.css$/i,
            use : ["style-loader", "css-loader"],
        },
    ],
  },
};


// mode: For now, we will just leave this in development mode, as it will be more useful to us. We will revisit this and production mode in a later lesson.
// entry: A file path from the config file to whichever file is our entry point, which in this case is src/index.js.
// output: An object containing information about the output bundle.
// filename: The name of the output bundle - it can be anything you want.
// path: The path to the output directory, in this case, dist. If this directory doesn’t already exist when we run Webpack, it will automatically create it for us as well. Don’t worry too much about why we have the path.resolve part - this is just the way Webpack recommends we specify the output directory.
// clean: If we include this option and set it to true, then each time we run Webpack to bundle, it will empty the output directory first before bundling the files into it. This helps us keep dist clean, so it only contains the files produced by the most recent bundling.


// With these files all in place, let’s run Webpack and see what happens!

// npx webpack