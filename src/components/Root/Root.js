import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App/App'
import About from './About/About'
import CityPage from './CityPage/CityPage'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>
                <Route path="/cities/:id" component={CityPage} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root