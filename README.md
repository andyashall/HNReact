# express-react-redux-webpack-boilerplate

## Install and Running

1. `git clone https://github.com/andyashall/express-react-redux-webpack-boilerplate`
2. `cd express-react-redux-webpack-boilerplate && npm i`
4. Add your MongoDB URL to the `mongo.config.js` file.
5. `npm start`
6. open http://localhost:3000 in your browser.

## Build for Production

`npm run build`


## Overview

### Package List

- `axios-^0.16.1`
- `babel-cli-^6.4.0`
- `bcryptjs-^2.4.3`
- `body-parser-^1.17.1`
- `compression-^1.6.2`
- `cookie-parser-^1.4.3`
- `express-^4.15.3`
- `mongodb-^2.2.28`
- `random-id-0.0.2`
- `react-^15.6.1`
- `react-cookie-^2.0.7`
- `react-dom-^15.6.1`
- `react-redux-^5.0.5`
- `react-router-^4.1.1`
- `react-router-dom-^4.1.1`
- `redux-^3.6.0`
- `time-ago-^0.1.0`

### React by default
The project runs with React by default and hot replacement of changes to the modules.

### CSS Modules
A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default. All URLs (`url(...)`) and `@imports` are in module request format (`./xxx` and `../xxx` means relative, `xxx` and `xxx/yyy` means in modules folder, i. e. in `node_modules`).

To turn off CSS Modules remove it from the `webpack.config.js` file.