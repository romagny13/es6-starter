# Starter project with TypeScript

## Usage
Install dependencies

```
npm i
```
In development (webpack dev server)
```
npm run dev
```
Test (Karma + PhantomJS)
```
npm run test
```
Lint (esLint)
```
npm run lint
```
Build (Webpack or Rollup)
```
npm run build:webpack
npm run build
```


## Memento (Steps)

### 1. Create package.json
```
npm init -f
```

### 2. Babel

```
npm i babel-cli babel-loader babel-preset-latest -D
```
### 3. Create ".babelrc"
```
{
  "presets": ["latest"]
}
```

### 4. Create "src" and "dist" directories
with "src/main.js"

### 5. Test
Mocha
```
npm i chai mocha -D
```
types
```
npm i @types/chai @types/mocha -D
```
Jasmine
TODO

### 6. Karma
Create "karma.conf.js"
```
karma init
```
With Mocha
```
npm i karma karma-mocha karma-phantomjs-launcher karma-webpack -D
```

singleRun .. true

### 7. Webpack
```
npm i  webpack webpack-dev-server -D
```

### 8. NPM Scripts
```
npm i cross-env -D
```
In development
```
npm run dev
```
Test
```
npm run test
```
Lint
```
npm run lint
```

### 9. Build
Rollup
```
npm i rollup rollup-plugin-buble uglify-js -D
```
Create directory "build" with rollup configuration


### 10. Editor config

Create file ".editorconfig"

http://editorconfig.org/ 

Editor : Visual Studio Code

### 11. esLint
```
npm i eslint eslint-plugin-import eslint-watch -D
```
Create eslint configuration file
```
eslint --init
```
+ extension: esLint for Visual Studio Code

### 12. CI
Travis

Create ".travis.yml"

### 13. LICENSE MIT

### 14. gitignore
