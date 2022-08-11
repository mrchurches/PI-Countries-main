import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const CLEAR_FILTERED = "CLEAR_FILTERED";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_ACTIVITY = "GET_ACTIVITY";

export function getAllCountries(){
    return function(dispatch){
        axios.get("http://localhost:3001/api/countries")
        .then((res)=>{
            // res.data.sort((a,b)=>{
            //     if(a.name.toLowerCase() < b.name.toLowerCase())return -1;
            //     if(a.name.toLowerCase() > b.name.toLowerCase())return +1;
            //     return 0
            // })
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
        axios.get(`http://localhost:3001/api/countries?name=${input}`)
        .then(res=>{
            // if(res.data.length){
            // dispatch({
            //     type: GET_COUNTRY,
            //     payload: res.data
            // })
            // }else{
            //     dispatch({
            //         type: GET_COUNTRY,import { Dispatch } from "react";
            //         payload: {id:"error", name:"No country found", image: "https://img2.freepng.es/20180822/rg/kisspng-portable-network-graphics-computer-icons-error-ima-soylent-red-error-7-icon-free-soylent-red-error-5b7d3124044210.2536301815349312360175.jpg"}
            //     })
            // }
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
            axios.get(`http://localhost:3001/api/filters/activities?name=${name}`)
            .then(response=>{
                dispatch({
                    type: GET_ACTIVITY,
                    payload: response.data
                })
            })
        }
    }
    return function(dispatch){
        axios.get("http://localhost:3001/api/filters/activities")
        .then(response=>{
            dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
        })
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
        axios.post("http://localhost:3001/api/activities",{name, difficulty, duration, season, countries})
        .then((res)=>{dispatch({
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
        axios.get("http://localhost:3001/api/filters/asc")
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
        axios.get("http://localhost:3001/api/filters/desc")
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
        axios.get(`http://localhost:3001/api/filters/regions?continent=${input}`)
        .then(response=>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        })
    }
    }
if(input=== "ASC" || input === "DESC"){
    return function(dispatch){
        axios.get(`http://localhost:3001/api/filters/population?data=${input}`)
        .then(response=>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        })
    }
}
}