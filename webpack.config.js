const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/js/index.js', 
    output: { 
      publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js', 
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },

          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            generator: {
              filename: "./images/[name][ext]",
            },
          },

          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            type: "asset/resource",
            generator: {
              filename: "./fonts/[name][ext]",
            },
          },

          
          {
            test: /\.html$/i,
            loader: "html-loader",
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },


        ],
      },

      devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        port: 9001,
        devMiddleware: {
          writeToDisk: true,
        },
        client: {
          logging: 'error',
        },
        open: true,
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/projects.html', 
          filename: 'projects.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/project-details.html', 
        filename: 'project-details.html',
    }),

      new HtmlWebpackPlugin({
        template: './src/blog.html', 
        filename: 'blog.html',
    }),

      new HtmlWebpackPlugin({
        template: './src/blog-details.html', 
        filename: 'blog-details.html',
    }),

      new HtmlWebpackPlugin({
        template: './src/add-blog.html', 
        filename: 'add-blog.html',
    }),

      new HtmlWebpackPlugin({
        template: './src/about.html', 
        filename: 'about.html',
    }),

      new HtmlWebpackPlugin({
        template: './src/contact.html', 
        filename: 'contact.html',
    }),

        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ],
};
