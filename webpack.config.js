var path = require("path");
var webpack = require("webpack");

const getStyleLoaders = (cssOptions, preProcessor) => {
   const loaders = [
      require.resolve("style-loader"),
      {
         loader: require.resolve("css-loader"),
         options: cssOptions,
      },
      {
         loader: require.resolve("postcss-loader"),
         options: {
            postcssOptions: {
               ident: "postcss",
               plugins: [
                  require("postcss-flexbugs-fixes"),
                  require("postcss-preset-env")({
                     autoprefixer: {
                        flexbox: "no-2009",
                     },
                     stage: 3,
                  }),
                  require("postcss-normalize"),
               ],
            },
            sourceMap: true,
         },
      },
   ].filter(Boolean);
   if (preProcessor) {
      loaders.push(
         {
            loader: require.resolve("resolve-url-loader"),
            options: { sourceMap: true },
         },
         { loader: require.resolve(preProcessor), options: { sourceMap: true } }
      );
   }
   return loaders;
};

module.exports = {
   resolve: {
      extensions: [".js", ".ts", ".tsx", ".css", ".scss", ".less"],
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "awesome-typescript-loader",
            // include: path.join(__dirname, 'src'),
            options: {
               sourceMap: true,
               presets: [["react-app", { flow: false, typescript: true }]],
               plugins: [["import", { libraryName: "antd", style: true }]],
            },
         },
         {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            use: getStyleLoaders(
               {
                  importLoaders: 2,
                  sourceMap: true,
               },
               "sass-loader"
            ),
            sideEffects: true,
         },
         {
            test: /\.module\.(scss|sass)$/,
            use: getStyleLoaders(
               {
                  importLoaders: 2,
                  sourceMap: true,
                  modules: {
                     getLocalIdent: require("react-dev-utils/getCSSModuleLocalIdent"),
                  },
               },
               "sass-loader"
            ),
         },
         {
            test: /\.less$/,
            use: [
               { loader: "style-loader" },
               { loader: "css-loader" },
               {
                  loader: "less-loader",
                  options: {
                     lessOptions: {
                        modifyVars: {
                           "primary-color": "#00AB64",
                           "error-color": "#D72218",
                        },
                        javascriptEnabled: true,
                     },
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      new webpack.DefinePlugin({
         VERSION: JSON.stringify(process.env.VERSION),
         BUILD_TIME: JSON.stringify(new Date()),
      }),
   ],
   output: { globalObject: "this" },
};
