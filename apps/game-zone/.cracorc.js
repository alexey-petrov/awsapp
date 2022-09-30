const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: { output: { publicPath: "auto" } },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "gamezone",
          filename: "remoteEntry.js",
          remotes: {
            cardpicker:
              "cardpicker@https://main.d2e25t4zsich1t.amplifyapp.com/apps/cardpicker/build/remoteEntry.js",
            topnumber:
              "topnumber@https://main.d2e25t4zsich1t.amplifyapp.com/apps/topnumber/build/remoteEntry.js",
          },
          shared: {
            ...deps,
            ui: { singleton: true },
            react: { singleton: true, requiredVersion: deps.react },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
});
