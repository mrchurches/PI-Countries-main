import "./nav_bar.css"
import { Link, useLocation} from "react-router-dom";
import logo from "../../images/world.png"
import SearchBar from "../search_bar/search_bar";

export default function NavBar(){
    let location = useLocation();
    return(
        <div className="navbar">
            <div className="first">
                <Link className="buttons" to="/">
                <img src={logo} alt="world" className="logo"/>
                <span>PI-Countries</span>
                </Link>
            </div>
            <div>
                <Link className="buttons" to="/home">
                    <div>Home</div>
                </Link>
            </div>
            <div>
                <Link className="buttons" to="/country/create">
                    <div>Go create a activity</div>
                </Link>
            </div>
            <div>
            {location.pathname === '/home' && <SearchBar />}   
            </div>
        </div>
    )
}