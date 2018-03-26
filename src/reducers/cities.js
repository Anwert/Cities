import cities from './cities.json'

const initialState = cities

export default function citylist(state = initialState, action) {
    if (action.type === 'ADD_CITY') {
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === 'DELETE_CITY') {
        console.log('action.index - ', action.index)
        console.log('state - ', state)
        //state.splice(action.index,1)
        //return state
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ]
    }
    if (action.type === 'UPDATE_CITY') {
        console.log('action.index - ', action.index)
        console.log('action.text - ', action.text)
        console.log('state - ', state)
        return [
            ...state.slice(0, action.index),
            Object.assign({}, state[action.index], {
                name: action.text
            }),
            ...state.slice(action.index + 1)
        ]
        //state[action.index].name=action.text
        //return state
    }
    if (action.type === 'FETCH_CITIES') {
        return action.payload
    }
    return state
}