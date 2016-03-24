# IsomorphicReduxApp

Following Isomorphic Redux Application tutorial. https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.wxaxti2ks

## Setting up

### Dependencies

* axios
* express
* history
* immutable
* object-assign
* react
* react-dom
* react-redux
* react-router
* redux

### Dev Dependencies

* babel-core
* babel-loader
* babel-polyfill
* babel-preset-es2015
* babel-preset-react
* babel-register
* webpack
* webpack-dev-server

Create package.json:

```
$ npm init
```

Install babel and webpack:

```
$ npm i babel-loader babel-core webpack --save-dev
$ npm install webpack@^1.12.11 --save-dev
$ npm i webpack-dev-server --save-dev
```

Create a `webpack.config.js` file:

```javascript
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/client'
    ],
    resolve: {
        root: [
            // allows us to import modules as if /src was the root.
            // so I can do: import Comment from 'components/Comment'
            // instead of:  import Comment from '../components/Comment' or whatever relative path would be
            path.resolve(__dirname, './src')
        ],
        // allows you to require without the .js at end of filenames
        // import Component from 'component' vs. import Component from 'component.js'
        extensions: ['', '.js', '.json', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};

module.exports = config;
```

Install presets:

```
$ npm i babel-preset-react babel-preset-es2015 --save-dev
$ touch .babelrc
```

`.babelrc` content:

```javascript
{
  "presets": ["react", "es2015"]
}
```

Install React and Redux:

```
$ npm i react react-dom react-redux react-router redux --save
```

Include scripts into `package.json`:

```javascript
"scripts": {
  "start": "NODE_PATH=$NODE_PATH:./src/shared node --harmony ./src",
  "dev": "npm run start & webpack-dev-server --devtool eval --progress --colors --hot --content-base dist",
  "build": "NODE_ENV=production webpack --progress --color -p --config webpack.prod.config.js"
},
```

Creating folders and files:

```
$ mkdir src
$ mkdir src/client
$ mkdir src/shared
$ touch src/index.js
$ touch src/server.jsx
$ touch src/shared/components/index.jsx
$ touch src/shared/routes.jsx
```

