import React from 'react'
import { connect } from 'react-redux'

import Menu from './Menu'

const CityPage = ( {city} ) => {
    if (!city) return (
        <div className="container">
            < Menu />
            <div>Sorry this city doesn't exist</div>
        </div>
    )
    else return (
        <div className="container">
            < Menu />
            <div className="text">The city you chose is {city.name}!</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        city: state.citiesReducer[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps)(CityPage)