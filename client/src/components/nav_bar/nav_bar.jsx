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
                <span>The countries page</span>
                </Link>
            </div>
            <div className="div">
                <Link className="buttons" to="/home">
                    <div>Home</div>
                </Link>
            </div>
            <div className="div">
                <Link className="buttons" to="/country/create">
                    <div>Create activity</div>
                </Link>
            </div>
            <div >
            {location.pathname === '/home' && <SearchBar />}   
            </div>
        </div>
    )
}