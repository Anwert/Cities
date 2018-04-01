import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import About from './About'
import Menu from './Menu'
import CityPage from './CityPage'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Menu}/>
                <Route exact path="/app" component={App} />
                <Route exact path="/about" component={About}/>
                <Route path="/cities/:id" component={About} component={CityPage} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root