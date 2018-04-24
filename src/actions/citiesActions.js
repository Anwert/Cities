import axios from 'axios'
import * as types from './actionTypes'

export const onAddCity = (cityName) => ({ type: types.ADD_CITY, payload: {name: cityName}})
export const onDeleteCity = (index) => ({ type: types.DELETE_CITY, index: index})
export const onUpdateCity = (index, text) => ({ type: types.UPDATE_CITY, text: text, index: index})
export const onFindCity = (name) => ({ type: types.FIND_CITY, name: name})

export const asyncGetCities = () => dispatch => {
    setTimeout(() => {
        console.log('I got cities')
        axios.get('https://raw.githubusercontent.com/zhak55/ru_cities/master/ru_cities.json')
            .then(response => {
                console.log('cities we get:',response.data)
                dispatch(setCities(response.data));
            })
            .catch(error => {
                console.error(error);
            });
    }, 1000)
}

export const onGetCities = () => {asyncGetCities()}

export function setCities(cities) {
    console.log('cities we get:',cities)
    return { type: types.SET_CITIES, cities: cities.data};
}

export function getCities() {
    return dispatch => {
        axios.get('https://raw.githubusercontent.com/zhak55/ru_cities/master/ru_cities.json')
            .then(response => {
                console.log('cities we get:',response.data)
                dispatch(setCities(response.data));
            })
            .catch(error => {
                console.error(error);
            });
    };
}