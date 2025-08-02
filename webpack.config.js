const path = require("path"); //Caminho de Build feita pelo Node.js, é bom usar o path para conseguir rodar em outros sistemas operacionais.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.js"), //Arquivo de entrada da Aplicação
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Resultado da compilação dentro da pasta dist
  },

  devServer: {
    //Webpack server
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true, // sempre que executar o dev server possa abrir a aplicação.
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"), //pega a pasta assets
          to: path.resolve(__dirname, "dist", "src", "assets"), // gera uma pasta assets e copia os arquivos
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
