import { useState } from "react"
import { useDispatch} from "react-redux";
import { clearFiltered, getCountry } from "../../redux/actions";

export default function SearchBar(){
    let [name, setName] = useState("");
    let dispatch = useDispatch();
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountry(name))
        setName("")
    }
    function handleClick(e){
        e.preventDefault();
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