import React from 'react'
import { connect } from 'react-redux'

const CityPage = ( {city} ) => {
    if (!city) return (
        <div>Sorry this city doesn't exist</div>
    )
    else return (
        <div>{city.name}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        //city: state.citylist.find(city =>  === Number(ownProps.match.params.id))
        city: state.citiesReducer[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps)(CityPage)