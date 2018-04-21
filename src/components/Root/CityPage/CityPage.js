import React from 'react'
import { connect } from 'react-redux'

import Menu from '../Menu/Menu'

const CityPage = ( {city} ) => {
    if (!city) return (
        <div>
            < Menu />
            <div>Sorry this city doesn't exist</div>
        </div>
    )
    else return (
        <div>
            < Menu />
            <div>{city.name}</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        city: state.citiesReducer[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps)(CityPage)