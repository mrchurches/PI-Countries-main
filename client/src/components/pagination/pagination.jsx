import React from "react";
import "./pagination.css"

export default function Pagination({countriesPerPage, countries, paginado, currentPage}){
    const pageNums = [];
    
    for(let i=1; i<= Math.ceil(countries/countriesPerPage); i++){
        pageNums.push(i)
    }
    function previous(){
        paginado(currentPage-1)
    }
    function next(){
        paginado(currentPage+1)
    }

    return(
        <nav>
            <ul className="pages">
                <button onClick={previous} disabled={currentPage===pageNums[0]?true:false}>{"<"}</button>
                {
                    pageNums && pageNums.map(e=>{return(
                        <li key={e} className={currentPage === e ? "actual" : "non"}>
                            <span onClick={()=> paginado(e)}>{e}</span>
                        </li>
                    )})
                }
                <button onClick={next} disabled={currentPage===pageNums.length?true:false}>{">"}</button>
            </ul>
        </nav>
    )
}