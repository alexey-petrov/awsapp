const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: { output: { publicPath: "auto" } },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "cardpicker",
          filename: "remoteEntry.js",
          exposes: {
            "./CardPicker": "./src/CardPicker.tsx",
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
  optimization: {
    splitChunks: false,
  },
});
