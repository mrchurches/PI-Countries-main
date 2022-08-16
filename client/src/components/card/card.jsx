import "./card.css"
import { Link } from "react-router-dom";

export default function Card({id, name, region, image}){
let changer = true;
name = name.split("");

name.forEach(e=>{

    if(e===" ") changer=true;
    if(changer=== true){
        e.toUpperCase();
        changer=false;
    }
});
name=name.join("")

    return(
        <div className="card">
            <Link className="link"to={`/countryDetail/${id}`}>
            <h1>{name}</h1>
                <img src={image} alt="country"/>
            <h3>{region}</h3>
            </Link>
        </div>
    )
}