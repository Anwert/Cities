import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'

import Root from './components/Root'
import App from './components/App/App.js'
import './index.css'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)