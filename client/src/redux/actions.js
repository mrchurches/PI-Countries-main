import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const CLEAR_FILTERED = "CLEAR_FILTERED";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let URL = "https://world-back.up.railway.app/"

export function getAllCountries(){
    return function(dispatch){
        axios.get(`${URL}api/countries`)
        .then((res)=>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: res.data
            })
        })

        .catch(err=>console.log(err))
    }
}

export function getCountry(input){
    return function(dispatch){
        axios.get(`${URL}api/countries?name=${input}`)
        .then(res=>{
            dispatch({
                    type: GET_COUNTRY,
                    payload: res.data
                })
        })
        .catch(e=>console.log(e))

    }
}

export function getActivities(name){
    if(name){
        return function(dispatch){
            axios.get(`${URL}api/filters/activities?name=${name}`)
            .then(response=>{
                dispatch({
                    type: GET_ACTIVITY,
                    payload: response.data[0].countries
                })
            })
            .catch(e=>console.log(e))
        }
    }
    return function(dispatch){
        axios.get(`${URL}api/filters/activities`)
        .then(response=>{
            dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
        })
        .catch(e=>console.log(e))
    }
}

export function clearFiltered(){
    return function(dispatch){
        dispatch({
            type: GET_COUNTRY,
            payload: []
        })
    }
}

export function postActivity({name, difficulty, duration, season, countries}){
    return function(dispatch){
        axios.post(`${URL}api/activities`,{name, difficulty, duration, season, countries})
        .then((res)=>{
            dispatch({
            type: POST_ACTIVITY,
            payload: res.data
        })
        })
        .catch(e=>console.log(e))
    }
}

export function filter(input){
if(input === "az"){
    return function(dispatch){
        axios.get(`${URL}api/filters/asc`)
    .then(response=>{
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: response.data
        })
    })
    .catch(e=>console.log(e))
}
}
if(input === "za"){
    return function(dispatch){
        axios.get(`${URL}api/filters/desc`)
    .then(response=>{
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: response.data
        })
    })
    .catch(e=>console.log(e))
        }
    }
if(input === "Americas" || input === "Europe" || input === "Asia" ||input === "Africa" || input === "Oceania" || input === "Antarctic"){
    return function(dispatch){
        axios.get(`${URL}api/filters/regions?continent=${input}`)
        .then(response=>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        })
        .catch(e=>console.log(e))
    }
    }
if(input=== "ASC" || input === "DESC"){
    return function(dispatch){
        axios.get(`${URL}api/filters/population?data=${input}`)
        .then(response=>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        })
        .catch(e=>console.log(e))
    }
}
}

export function setCurrentPage(number){
    return function(dispatch){
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: number
        })
    }
}