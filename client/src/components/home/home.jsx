import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries} from "../../redux/actions.js";
import Cards from "../cards/cards.jsx";
import Filters from "../filters/filters.jsx";
import Pages from "../pages/pages.jsx"
import "./home.css";

export default function Home(){
    let filteredCountries = useSelector((state)=> state.filteredCountries);
    let countries = useSelector((state)=> state.countries);
    let dispatch = useDispatch();
    let [currentPage, setCurrentPage] = useState(1);
    let [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (number) => {
        setCurrentPage(number)
    }

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch]);

    return(
        <div className="Home">
            <Filters />
            <Pages countriesPerPage={countriesPerPage} countries={countries.length} paginado={paginado}/>
            <Cards 
                    allCountries = {filteredCountries.length?filteredCountries:currentCountries}
                />
        </div>
    )
}