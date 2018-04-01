import React, { Component } from 'react'
import { connect } from 'react-redux'

import City from './City'
import {asyncGetCities} from './actions/cities.js'

class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = { e: true }
    }

    addCity() {
        console.log('ownProps', this.props.citiesownProps)
        this.props.onAddCity(this.cityInput.value)
        console.log('store after add - ', this.props.store)
        this.cityInput.value=''
    }

    deleteCity(index) {
        console.log('index of city to delete:', index)
        this.props.onDeleteCity(index)
        console.log('store after delete - ', this.props.store)
    }

    updateCity(index, text) {
        console.log('index of city to update:', index)
        this.props.onUpdateCity(index, text)
        console.log('store after delete - ', this.props.store)
    }

    searchCity() {
        this.props.onFindCity(this.searchInput.value)
    }

    getCities() {
        this.props.onGetCities()
    }

    render() {
        return (
            <div>
                    <input type="text" ref={(input) => { this.searchInput = input}}/>
                    <button onClick={this.searchCity.bind(this)}>Search</button>
                    <input type="text" ref={(input) => { this.cityInput = input}}/>
                    <button onClick={this.addCity.bind(this)}>Add city</button>
                    <button onClick={this.getCities.bind(this)}>Get cities</button>
                    <ul>
                        {this.props.store.map((item,index) =>
                             <li key={index}>
                                 <City item={item} index={index} deleteCity={this.deleteCity.bind(this)} updateCity={this.updateCity.bind(this)}/>
                             </li>
                        )}
                    </ul>
            </div>
        )
    }
}

export default connect(
    (mapStateToProps, ownProps) => ({
        store: mapStateToProps.citylist.filter(city => city.name.includes(mapStateToProps.filterCities)),
        citiesownProps: ownProps
        //store: mapStateToProps.citylist
    }),
    dispatch => ({
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
)(Cities)