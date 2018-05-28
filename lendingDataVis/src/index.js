import React from "react";
import ReactDOM from "react-dom";
import store from 'state/store'
import { Provider } from 'react-redux'

import { MainPage } from 'components/MainPage'
// const fs = require('fs')
// const dataS = require('dsv-loader!./LoanStats3a.csv');
// let csv = require('../data/LoanStats3a.csv')
const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
    )
};


ReactDOM.render(<App />, document.getElementById("index"));