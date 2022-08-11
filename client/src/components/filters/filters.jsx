import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter, getActivities, getAllCountries } from "../../redux/actions";

export default function Filters(){
let dispatch = useDispatch();
let activities = useSelector(state => state.activities);
let activity = useSelector(state => state.filteredActivity);
let countries = useSelector(state => state.countries);
const regions = ()=>{
    let list = countries.map(e=> e.region);
    let regions = list.filter((e,index)=> list.indexOf(e) === index)
    return regions;
}
// countries.map(e=> e.region);
// regions = regions.filter((e, index)=>regions.indexOf(e) === index);

useEffect(()=>{
    dispatch(getActivities())
},[])    

function handleChange(e){
       // console.log(e.target.name)
        if(e.target.name === "activity"){
            if(e.target.value === "default") dispatch(getAllCountries());
            else{
dispatch(getActivities(e.target.value))}
        }
        else{
            if(e.target.value === "default") dispatch(getAllCountries());
            else{ dispatch(filter(e.target.value))}
        }
    }

    return(
        <div>
            <select name="orden" onChange={handleChange}>
                <option value="default">select</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <select name="continent" onChange={handleChange}>
                <option value="default">Region</option>
                {regions().map(e=>{
                    return(
                    <option key={e} value={e} >{e}</option>
                    )
                })}
            </select>
            <select name="activity" onChange={handleChange}>
                <option value="empty">Activities</option>
                {activities?.map(e=>{
                    return(
                        <option value={e.name} >{e.name}</option>
                    )
                })}
            </select>
            <select name="population" onChange={handleChange}>
                <option value="default">Population</option>
                <option value="DESC">Max</option>
                <option value="ASC">Min</option>
            </select>
                {
                    activity && activity.map(e=>{
                        return(
                            <div>
                                <h4>{e.name}</h4>
                                <h4>{e.difficulty}</h4>
                                <h4>{e.duration}</h4>
                                <h4>{e.season}</h4>
                                {e.countries.map(e=>{
                                    return(
                                        <div>
                                            <h4>{e.name}</h4>
                                            <h4></h4>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
        </div>
    )
}