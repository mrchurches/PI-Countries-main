import { GET_ACTIVITIES, GET_ACTIVITY, GET_ALL_COUNTRIES, GET_COUNTRY, POST_ACTIVITY, SET_CURRENT_PAGE } from "./actions.js";

let initialState = {
    countries: [],
    filteredCountries: [],
    activities: [],
    currentPage: 1
    // filteredActivity : []
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
                filteredCountries : action.payload,
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
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        
        default:
            return state
    }
}