import Card from "../card/card.jsx";
import "./cards.css"

export default function Cards({allCountries}){

    return(
        <div className="cards">
            {
                allCountries.map(e=>{
                    return(
                        <Card 
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        region={e.region}
                        image={e.image}
                        />
                    )
                    })
            }
        </div>
    ) }