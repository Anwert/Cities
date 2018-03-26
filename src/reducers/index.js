import { combineReducers } from 'redux'

import citylist from './cities.js'
import countrieslist from './countries.js'
import filterCities from './filterCities.js'

export default combineReducers({
    citylist,
    countrieslist,
    filterCities
})