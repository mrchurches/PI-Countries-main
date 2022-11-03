import style from "./nav_bar.module.css"
import { Link, useLocation} from "react-router-dom";
import logo from "../../images/world.png"
import SearchBar from "../search_bar/search_bar";

export default function NavBar(){
    let location = useLocation();
    return(
        <div className={style.navbar}>
            <div className={style.first}>
                <Link className={style.hvr_underline_from_center} to="/">
                <img src={logo} alt="world" className={style.logo}/>
                <span>World</span>
                </Link>
            </div>
            <div>
                <Link className={style.hvr_underline_from_center} to="/home">
                    <div>Home</div>
                </Link>
            </div>
            <div>
                <Link className={style.hvr_underline_from_center} to="/country/create">
                    <div>Create activity</div>
                </Link>
            </div>
            <div >
            {location.pathname === '/home' && <SearchBar />}   
            </div>
        </div>
    )
}