import React from "react";
import "../pages/pages.css"
export default function Pages({countriesPerPage, countries, paginado}){
    const pageNums = [];
    
    for(let i=1; i<= Math.ceil(countries/countriesPerPage); i++){
        pageNums.push(i)
    }

    return(
        <nav>
            <ul className="pages">
                {
                    pageNums && pageNums.map(e=>{return(
                        <li key={e}>
                            <span onClick={()=> paginado(e)}>{e}</span>
                        </li>
                    )})
                }
            </ul>
        </nav>
    )
}