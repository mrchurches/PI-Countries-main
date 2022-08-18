import { useState } from "react"
import { useDispatch} from "react-redux";
import { clearFiltered, getCountry, setCurrentPage } from "../../redux/actions";
import "./search_bar.css"

export default function SearchBar(){
    let [name, setName] = useState("");
    let dispatch = useDispatch();
    
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!name){alert("no data")}
        else{
            dispatch(getCountry(name))
            dispatch(setCurrentPage(1))
            setName("")
            }
        }

    function handleClick(e){
        e.preventDefault();
        dispatch(clearFiltered())
    }

    return(
        <div className="search">
             <div className="form">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search a country..." value={name} onChange={handleChange}/>
                <button type="submit" >Search</button>
                </form>
             </div>
             <div className="clear">
                <button onClick={handleClick}>Clear</button>
             </div>
        </div>
    )
}