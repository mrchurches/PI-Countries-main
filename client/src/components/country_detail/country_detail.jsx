import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetail(){
    const [countries, setCountries] = useState(null);
    let {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/countries/${id}`)
        .then((res)=>setCountries(res.data))
    },[])

    return(
            <div>
            {
            countries?
            <div>
                <h1>{countries.name}</h1>
                <h3>{countries.capital}</h3>
                <h3>{countries.region} ({countries.subregion})</h3>
                <h3>{countries.area} kmº2</h3>
                <h3>Population: {countries.population}</h3>
                <h3>Activities: </h3>
                {
                    countries.activities.map(e=>{
                        return(
                                <div>
                                    <h4>{e.name}</h4>
                                    <h4>{e.difficulty}</h4>
                                    <h4>{e.duration}</h4>
                                    <h4>{e.season}</h4>
                                    
                                </div>
                        )
                    })
                }
                <img src={countries.image} alt="country"/>
            </div>
                : <h1>Loading....</h1> 
                }
            <Link to="/home">
            <h4>Back</h4>
            </Link>
            
        </div>
    )}