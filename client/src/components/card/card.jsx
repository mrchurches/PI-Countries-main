import "./card.css"
import { Link } from "react-router-dom";

export default function Card({id, name, region, image}){
    return(
        <div className="card">
            <h1>{name}</h1>
            <Link to={`/countryDetail/${id}`}>
                <img src={image} alt="country"/>
            </Link>
            <h3>{region}</h3>
        </div>
    )
}