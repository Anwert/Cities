import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { getCities } from './actions/citiesActions';

import Root from './components/Root'
import './index.css'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(getCities())

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)