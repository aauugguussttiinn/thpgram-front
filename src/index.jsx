import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "store/reducers"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// npm i js-cookie
// npm i react-loading
// npm install react-router-dom --save
// npm install sass-loader sass webpack --save-dev
// npm install react-bootstrap bootstrap
// npm i -s react-redux redux redux-thunk redux-devtools-extension
// npm install axios

// code jsconfig.json
// {
//   "compilerOptions": {
//     "baseUrl": "src"
//   },
//   "include": ["src"]
// }

// package.json
// "scripts": {
//   "start": "PORT=8000 react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },