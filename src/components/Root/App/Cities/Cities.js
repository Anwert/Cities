import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import City from './City/City'
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
            <div>
                    <input type="text" ref={(input) => { searchInput = input} }/>
                    <button onClick={searchCity}>Search</button>
                    <input type="text" ref={(input) => { cityInput = input} }/>
                    <button onClick={addCity}>Add city</button>
                    <button onClick={getCities}>Get cities</button>
                    <ul>
                        {store.map((item,index) =>
                             <li key={index}>
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