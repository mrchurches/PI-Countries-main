import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries} from "../../redux/actions.js";
import Cards from "../cards/cards.jsx";
import Filters from "../filters/filters.jsx";
import { Link } from "react-router-dom";

export default function Home(){
    let filteredCountries = useSelector((state)=> state.filteredCountries);
    let countries = useSelector((state)=> state.countries);
    let dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[]);

    return(
        <div>
            <Filters />
            <Cards 
                    allCountries = {filteredCountries.length?filteredCountries:countries}
                />
        </div>
    )
}