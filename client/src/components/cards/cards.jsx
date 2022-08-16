import Card from "../card/card.jsx";
import "./cards.css"
import {useState} from "react";
import { useEffect } from "react";


export default function Cards({allCountries}){
const [show, setShow] = useState(false);
useEffect(()=>{
    setTimeout(()=>setShow(show=>show=true),2000)
},[])
    return(
        <div className="cards">
            {
                show===false && (<div>
                <img src="https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&px=999" alt="err" />
                <h4>Loading...</h4>
            </div>)
            }
            {show&&allCountries.map(e=>{
                    return(
                        <Card 
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        region={e.region}
                        image={e.image}
                        />
                    )
                    })}
        </div>
    ) }