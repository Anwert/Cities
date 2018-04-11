import * as types from '../actions/actionTypes';
import initialState from '../store/initialState'

export default function citiesReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CITIES:
            return action.cities
        case types.ADD_CITY:
            return [
                ...state,
                action.payload
            ]
        case types.DELETE_CITY:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        case types.UPDATE_CITY:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    name: action.text
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}