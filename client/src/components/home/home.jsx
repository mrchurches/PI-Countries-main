import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries} from "../../redux/actions.js";
import Cards from "../cards/cards.jsx";
import Filters from "../filters/filters.jsx";
import Pagination from "../pagination/pagination.jsx"
import "./home.css";

export default function Home(){
    let filteredCountries = useSelector((state)=> state.filteredCountries);
    let countries = useSelector((state)=> state.countries);
    let dispatch = useDispatch();
    let [currentPage, setCurrentPage] = useState(1);
    let [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = filteredCountries.length? filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry): countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const [show, setShow] = useState(false);

    const paginado = (number) => {
        setCurrentPage(number)
    }

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch]);


    return(
        <div className="Home">
            <button className="show" onClick={()=> setShow(show => !show)}>{show?"Hide filters":"Show filters"}</button>
            {show&&<Filters />}
            <Pagination currentPage={currentPage} countriesPerPage={countriesPerPage} countries={filteredCountries.length? filteredCountries.length : countries.length} paginado={paginado}/>
            <Cards 
                    allCountries = {currentCountries}
                />
        </div>
    )
}