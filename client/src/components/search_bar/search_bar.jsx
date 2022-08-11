import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearFiltered, getCountry } from "../../redux/actions";

export default function SearchBar(){
    let [name, setName] = useState("");
    let dispatch = useDispatch();
    let filteredCountries = useSelector(state=> state.filteredCountries);
    function handleChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountry(name))
        setName("")
    }
    function handleClick(e){
        dispatch(clearFiltered())
    }

    return(
        <div>
             <form onSubmit={handleSubmit}>
             <input type="text" placeholder="search a country" value={name} onChange={handleChange}/>
             <button type="submit">Search</button>
             </form>
             <button onClick={handleClick}>Clear</button>
        </div>
    )
}