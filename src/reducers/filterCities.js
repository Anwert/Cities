const initialState = ''

export default function filterCities(state = initialState, action) {
    if (action.type === 'FIND_CITY') {
        return action.name
    }
    return state
}