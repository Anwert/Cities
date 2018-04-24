import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import City from './City'
import * as citiesActions from '../../../../actions/citiesActions.js'

const Cities = ({store, actions}) => {
    let cityInput = ''
    let searchInput = ''

    const addCity = () => {
        actions.onAddCity(cityInput.value)
        console.log('store after add - ', store)
        cityInput.value=''
    }

    const deleteCity = (index) => {
        console.log('index of city to delete:', index)
        actions.onDeleteCity(index)
        console.log('store after delete - ', store)
    }

    const updateCity = (index, text) => {
        console.log('index of city to update:', index)
        actions.onUpdateCity(index, text)
        console.log('store after delete - ', store)
    }

    const searchCity = () => {
        actions.onFindCity(searchInput.value)
    }

    const getCities = () => {
        actions.asyncGetCities()
    }

        return (
            <div className="cities">
                    <div className="searchcity">
                        <input type="text" ref={(input) => { searchInput = input} } className="searchcity-input" />
                        <button onClick={searchCity} className="searchcity-btn"></button>
                    </div>
                    <div className="city" className="addcity">
                        <input type="text" ref={(input) => { cityInput = input} } className="city-input"/>
                        <button onClick={addCity} className="addcity-btn">Add city</button>
                    </div>
                    <button onClick={getCities} className="btn-getCities">Get cities</button>
                    <ul className="city-ul">
                        {store.map((item,index) =>
                             <li key={index} className="city-li">
                                 <City item={item} index={index} deleteCity={deleteCity} updateCity={updateCity} />
                             </li>
                        )}
                    </ul>
            </div>
        )
}

const mapStateToProps = (state, ownProps) => ({
    store: state.citiesReducer.filter(city => city.name.includes(state.filterCities))
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(citiesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities)