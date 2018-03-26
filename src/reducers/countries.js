const countries=[
    'Russia', 'England'
]

const initialState = countries

export default function countrieslist(state = initialState, action) {
    if (action.type === 'ADD_COUNTRY') {
        return [...state]
    }
        if (action.type === 'DELETE_COUNTRY') {
            return [...state]
        }
    return state
}