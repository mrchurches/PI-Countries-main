import { GET_ACTIVITIES, GET_ACTIVITY, GET_ALL_COUNTRIES, GET_COUNTRY, POST_ACTIVITY } from "./actions.js";

let initialState = {
    countries: [],
    filteredCountries: [],
    activities: [],
    filteredActivity : []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_ACTIVITY:
            return {
                ...state,
                filteredActivity : action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case GET_COUNTRY:
            return {
                ...state,
                filteredCountries: action.payload
            }
        default:
            return state
    }
}