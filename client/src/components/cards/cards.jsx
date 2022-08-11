import Card from "../card/card.jsx";
import "./cards.css"

export default function Cards({allCountries}){
    let countries = allCountries.map(e=>{
        return(
            <div className="cards">
                <Card key={e.id} id={e.id} name={e.name} region={e.region} image={e.image}/>
            </div>
        )
    });
    
    return countries; }