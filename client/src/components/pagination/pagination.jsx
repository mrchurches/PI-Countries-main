import React from "react";
import "./pagination.css"

export default function Pagination({countriesPerPage, countries, paginado, currentPage}){
    const pageNums = [];
    
    for(let i=1; i<= Math.ceil(countries/countriesPerPage); i++){
        pageNums.push(i)
    }

    return(
        <nav>
            <ul className="pages">
                {
                    pageNums && pageNums.map(e=>{return(
                        <li key={e} className={currentPage === e ? "actual" : "non"}>
                            <span onClick={()=> paginado(e)}>{e}</span>
                        </li>
                    )})
                }
            </ul>
        </nav>
    )
}