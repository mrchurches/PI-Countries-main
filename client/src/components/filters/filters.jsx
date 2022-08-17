import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFiltered, filter, getActivities, getAllCountries } from "../../redux/actions";
import "./filters.css"

export default function Filters(){
let dispatch = useDispatch();
let activities = useSelector(state => state.activities);
let activity = useSelector(state => state.filteredActivity);
const regions = ["Africa", "Americas", "Asia","Oceania","Europe","Antarctic"];

useEffect(()=>{
    dispatch(getActivities())
},[dispatch])    


function handleChange(e){
    
        if(e.target.name === "activity"){
            if(e.target.value === "default") dispatch(clearFiltered());
            else{
                dispatch(getActivities(e.target.value))
                console.log(activity)
            }
        }
        else{
            if(e.target.value === "default") dispatch(getAllCountries());
            else{ dispatch(filter(e.target.value))}
        }
    }

    return(
        <div className="filters">
            <div className="select">
                <select name="orden" onChange={handleChange}>
                    <option value="default">select</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>    
            </div>
            <div className="select">
                <select name="continent" onChange={handleChange}>
                    <option value="default">Region</option>
                    {regions.map(e=>{
                        return(
                        <option key={e} value={e} >{e}</option>
                        )
                    })}
                </select>
            </div>
            <div className="select">
                <select name="activity" onChange={handleChange}>
                    <option value="default">Activities</option>
                    {activities?.map(e=>{
                        return(
                            <option value={e.name} key={e.name}>{e.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="select">
                <select name="population" onChange={handleChange}>
                    <option value="default">Population</option>
                    <option value="DESC">Max</option>
                    <option value="ASC">Min</option>
                </select>
            </div>
        </div>
    )
}