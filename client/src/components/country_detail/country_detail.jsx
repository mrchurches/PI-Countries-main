import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./country_detail.css"


export default function CountryDetail(){
    const [countries, setCountries] = useState("");
    let {id} = useParams();

    useEffect(()=>{
        setTimeout(()=>{
            axios.get(`http://localhost:3001/api/countries/${id}`)
            .then((res)=>setCountries(res.data))
        },1000)
    },[id])

    return(
            <div>
            {
            countries?
            <div className="cont">
                           <h1>{countries.name}</h1>
                <div className="detail">
                    <div >
                            <h3>Capital: {countries.capital}</h3>
                            <h3>{countries.region} ({countries.subregion})</h3>
                            <h3>Area: {countries.area} kmº2</h3>
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
                    </div>
                    <div className="image">
                        <img src={countries.image} alt="country"/>
                    </div>

                </div>
            </div>
                : 
                <div>
                    <img src="https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&px=999" alt="err" />
                    <h4>Loading...</h4>
                </div>
                }
        </div>
    )}