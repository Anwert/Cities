import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer.js'
import filterCities from './filterCities.js'

export default combineReducers({
    citiesReducer,
    filterCities
})