import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import allReducers from 'reducers'

const store = createStore(allReducers, {
    loanData: {},
    selectedCompany: {}
})

store.subscribe(()=> console.log(store.getState()));

export default store;