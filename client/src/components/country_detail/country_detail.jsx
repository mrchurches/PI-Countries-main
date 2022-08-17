import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./country_detail.css"


export default function CountryDetail(){
    const [countries, setCountries] = useState("");
    let {id} = useParams();
    const history= useHistory();
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
                           <div>
                                <h1>{countries.name}</h1>
                                
                           </div>
                <div className="detail">
                    <div>
                            <h3>Capital: {countries.capital}</h3>
                            <h3>{countries.region} ({countries.subregion})</h3>
                            <h3>Area: {countries.area} kmº2</h3>
                            <h3>Population: {countries.population}</h3>
                    </div>
                    <div className="image">
                        <img src={countries.image} alt="country"/>
                    </div>
                </div>
                <h3>Activities: </h3>
                <div className="activity">
                            {
                                countries.activities.map(e=>{
                                    return(
                                            <div className="act-cont" key={e.name}>
                                                <h4>{e.name}</h4>
                                                <hr/>
                                                <h4>Difficulty: {e.difficulty}</h4>
                                                <h4>Duration of the activity: {e.duration}</h4>
                                                <h4>Better season to do is {e.season}.</h4>
                                                
                                            </div>
                                    )
                                })
                            }
                </div>
                <button onClick={()=> history.goBack()}>Back</button>
            </div>
                : 
                <div>
                    <img src="https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&px=999" alt="err" />
                    <h4>Loading...</h4>
                </div>
                }
        </div>
    )}