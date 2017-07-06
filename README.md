# es6 Starter

> Ultra Light version

## Usage

Install dependencies

```
npm i
```

* Dev (run example)

```
npm run dev
```
Go http://localhost:8080/

* Build

```
npm run build
```

* Test (Karma + PhantomJS)
```
npm run test
```

* eslint
```
npm run lint
```

## Memento

### Before

Install globally

```
npm i karma cross-env eslint -g
```
VS Code Extensions:
* eslint for Visual Studio Code

### package.json
```
npm init -f
```

### Webpack + Babel

```
npm i webpack -D
```

Babel

```
npm i babel-cli babel-loader babel-preset-latest -D
```

.babelrc

```json
{
  "presets": ["latest"]
}
```

### Build

Simple

```js
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'mylib.js',
        libraryTarget: 'umd',
        library: 'MyLib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    }
};
```

Plugins (minification, etc.)

```js
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'mylib.min.js',
        libraryTarget: 'umd',
        library: 'MyLib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
```

NPM Script

```json
"scripts": {
    "build": "webpack --progress --hide-modules"
}
```

or if config file is not "webpack.config.js"

```json
"scripts": {
    "build": "webpack --config webpack.prod --progress --hide-modules"
}
```

```
npm run build
```

### Dev Server

```
npm i webpack-dev-server -D
```

```js
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './example/es6/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: './example/es6',
        historyApiFallback: true,
        noInfo: true
    },
    devtool: "#eval-source-map"
};
```

NPM Script
```json
"scripts": {
    "dev": "webpack-dev-server --config webpack.dev --open --inline --hot"
},
```

```
npm run dev
```

### Test

Mocha

```
npm i chai mocha @types/chai @types/mocha -D
```

Karma

```
npm i karma -D
```

```
npm i karma karma-mocha karma-phantomjs-launcher karma-webpack -D
```

karma.conf.js
```
karma init
```

Mocha + PhantomJS + patterns ('test/index.js' and 'src/**/*.spec.ts')

files 
```js
files: [
      'node_modules/babel-polyfill/browser.js',
      './test/index.js',
      './src/**/*.spec.js'
    ],
```

preprocessors
```js
 preprocessors: {
            'test/index.js': ['webpack'],
            'src/**/*.spec.js': ['webpack']
        },
```

webpack
```js
webpack: {
      module: {
        rules: [
          { test: /\.js$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
      }
    },

    webpackMiddleware: {
      stats: {
        colors: true,
        chunks: false
      }
    },
```

plugins
```js
 plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-phantomjs-launcher')
        ],
```

NPM Script
```json
"scripts": {
    "test": "karma start"
  },
```

```
npm test
```

### Editor config

Create file ".editorconfig"

http://editorconfig.org/ 

Editor : Visual Studio Code

```
# http://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

### eslint
```
npm i eslint eslint-plugin-import eslint-watch -D
```

Create eslint configuration file
```
eslint --init
```

+ extension: eslint for Visual Studio Code

### Travis

.travis.yml
```js
language: node_js
node_js:
  - "6"
```

### LICENSE 
MIT

### .gitignore
