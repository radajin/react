# React.js

- [react coding style](https://github.com/apple77y/javascript/tree/master/react)
- [youtube lecture](https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)

## 1. Basic React

### install global package 

```
$ sudo npm install -g babel webpack webpack-dev-server
```

#### init npm

``` 
$ npm init 
```

#### install dependency plugin
```
$ npm install --save react react-dom
$ npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
```

#### make directory and files
```
$ mkdir src src/components public && touch public/index.html src/components/App.js src/index.js webpack.config.js
```

#### reference
- [velopers blog](https://velopert.com/814)
- [summary note](https://www.evernote.com/l/AVBGv504soZFwLpX_oc6Ayvdnd9WzP8OrtQ)


## 2. Create React App

#### Install create-react-app
```
$ npm install -g create-react-app
```

#### Make App
```
$ create-react-app hello-world
```

#### Run App
``` 
hello-world $ npm start 
```

#### reference
- [facebook create react page](https://facebook.github.io/react/docs/installation.html)
- [velopers blog](https://velopert.com/2037)
- [summary note](https://www.evernote.com/l/AVBGv504soZFwLpX_oc6Ayvdnd9WzP8OrtQ)

## 3. Redux
- [Flux cartoon](http://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/)
- [Redux cartoon](http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)


### Install Redux
```
$ npm install --save redux react-redux
```

### Make React App
```
$ create-react-app redux
```

### Run App
```
redux $ npm start
```

