import { useState } from "react"
import { useDispatch} from "react-redux";
import { clearFiltered, getCountry, setCurrentPage } from "../../redux/actions";
import style from "./search_bar.module.css"

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
        <div className={style.search}>
             <div className={style.form}>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search a country..." value={name} onChange={handleChange}/>
                <button type="submit" >Search</button>
                </form>
             </div>
             <div className={style.clear}>
                <button onClick={handleClick}>Clear</button>
             </div>
        </div>
    )
}