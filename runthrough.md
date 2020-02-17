# Simply Put...

## Webpack installation

Webpack tutorial taken from:
https://www.valentinog.com/blog/react-webpack-babel/
https://webpack.js.org/guides/asset-management/

- connect to github: http://kbroman.org/github_tutorial/pages/init.html
- get a package.json file:

        - npm init

- be sure to create a .gitignore file ignoring itself as well as node_modules:

        touch .gitignore

in .gitignore:

      .gitignore
      /node_modules

- install webpack:

      $ npm install webpack webpack-cli -D

- add a build script for webpack to package.json:

in package.json:

      ...
      "scripts": {
      "build": "webpack"
      }
      ...

- webpack4 by default looks for a file "./src/index.js" to get bundled and outputs
  "./dist/main.js"

        $ npm run build

- This runs the webpack command (defaults to production mode) and outputs a minified bundle
  file in ./dist/main.js

---

## ---- Installing babel ----

- install babel via npm:

      $ npm i babel-core babel-loader babel-preset-env --save-dev

- create and configure .babelrc to let babel know how you'll be using it:

      $ touch .babelrc

in .babelrc:

    {
    "presets": ["env"]
    }

- configure babel-loader
  -- can either use webpack's config file (webpack.config.js) or --module-bind in npm scripts

  - create a config file (webpack.config.js):

          $ touch webpack.config.js

    in webpack.config.js:

          module.exports = {
            module: {
              rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader"
                  }
                }
              ]
            }
          };

* To run babel-loader without a config file, you can change your package.json scripts:

  in package.json:

        ...
        "scripts": {
        "dev": "webpack --mode development --module-bind js=babel-loader",
        "build": "webpack --mode production --module-bind js=babel-loader"
        }
        ...

---

## ---- Installing React ----

      $ npm i react react-dom --save-dev
      $ npm i babel-preset-react --save-dev

- configure .babelrc for the preset:

in .babelrc

      {
      "presets": ["env", "react"]
      }

---

## ---- Processing HTML ----

- To process HTML, webpack needs html-webpack-plugin and html-loader

        $ npm i html-webpack-plugin html-loader --save-dev

- Update the webpack configuration file:

  in webpack.config.js:

        const HtmlWebPackPlugin = require("html-webpack-plugin");

        module.exports = {
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
              {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
            ]
          },
          plugins: [
            new HtmlWebPackPlugin({
              template: "./src/index.html",
              filename: "./index.html"
            })
          ]
        };

* create an HTML file in the src directory called index.html:

      $ touch index.html:

  in index.html:

---

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="root">

        </div>
      </body>
    </html>

---

- Run the build script and view the ./dist/index.html to see the output file
  (the bundle with main.js is already injected):

      $ npm run build

---

## ---- Configuring CSS ----

https://webpack.js.org/guides/asset-management/

- To import a CSS file within a JS module, we need to install style-loader and css-loader
  to the module configuration

      $ npm install --save-dev style-loader css-loader

- In webpack's config files, set up the module rules for CSS:

in webpack.config.js:

        rules: [
        ...
          {
            test: '/\.css\$/',
            use: [ style-loader, css-loader ]
          }
        ...
        ]

- Add in a .css file in the src directory

      $ touch <filename>.css

- import css file in the necessary module (top-level js file would work):

in src/index.js

        import './<filename>.css'
        ...

- Use webpack to build a new bundle:

        $ npm run build

---

## ---- Development Server ----

- Install the package and add it as a dependency:

        $ npm install --save-dev webpack-dev-server

- In your config file, tell dev-sever where to look for changes:

in webpack.config.js:

        module.exports = {
          ...,
          devServer: {
          contentBase: './dist'
          },
          ...
        }

- Add a script to your package.json to easily run

in package.json:

      ...
      "scripts": {
      ...,
      "start": "webpack-dev-server --open --mode development",
      ...
      }
      ...

- Get the server up and running

      $ npm run start
