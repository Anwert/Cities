import * as types from './actionTypes';
import initialState from '../store/initialState'

export const onAddCity = (cityName) => ({ type: types.ADD_CITY, payload: {name: cityName}})
export const onDeleteCity = (index) => ({ type: types.DELETE_CITY, index: index})
export const onUpdateCity = (index, text) => ({ type: types.UPDATE_CITY, text: text, index: index})
export const onFindCity = (name) => ({ type: types.FIND_CITY, name: name})

export const asyncGetCities = () => dispatch => {
    setTimeout(() => {
        console.log('I got cities')
        dispatch({
            type: 'FETCH_CITIES',
            payload: initialState
        })
    }, 4000)
}

export const onGetCities = () => {asyncGetCities()}