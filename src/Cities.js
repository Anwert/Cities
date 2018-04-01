import React, { Component } from 'react'
import { connect } from 'react-redux'

import City from './City'
import {asyncGetCities} from './actions/cities.js'

const Cities = ({store, onAddCity, onDeleteCity, onUpdateCity, onFindCity, onGetCities}) => {
    let cityInput = ''
    let searchInput = ''

    const addCity = () => {
        onAddCity(cityInput.value)
        console.log('store after add - ', store)
        cityInput.value=''
    }

    const deleteCity = (index) => {
        console.log('index of city to delete:', index)
        onDeleteCity(index)
        console.log('store after delete - ', store)
    }

    const updateCity = (index, text) => {
        console.log('index of city to update:', index)
        onUpdateCity(index, text)
        console.log('store after delete - ', store)
    }

    const searchCity = () => {
        onFindCity(this.searchInput.value)
    }

    const getCities = () => {
        onGetCities()
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
                                 <City item={item} index={index} deleteCity={deleteCity} updateCity={updateCity}/>
                             </li>
                        )}
                    </ul>
            </div>
        )
}

const mapStateToProps = (mapStateToProps, ownProps) => ({
    store: mapStateToProps.citylist.filter(city => city.name.includes(mapStateToProps.filterCities)),
})

const dispatch = (dispatch) => ({
    onAddCity: (cityName) => {
        dispatch({ type: 'ADD_CITY', payload: {name: cityName}})
    },
    onDeleteCity: (index) => {
        dispatch({ type: 'DELETE_CITY', index: index})
    },
    onUpdateCity: (index, text) => {
        dispatch({ type: 'UPDATE_CITY', text: text, index: index})
    },
    onFindCity: (name) => {
        dispatch({ type: 'FIND_CITY', name: name})
    },
    onGetCities: () => {
        dispatch(asyncGetCities())
    }
})

export default connect(mapStateToProps,dispatch)(Cities)