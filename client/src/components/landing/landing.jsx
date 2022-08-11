import { Link } from "react-router-dom";
import "./landing.css"
export default function Landing(){
    return(
        <div className="landing">
            <h1 className="title">Welcome to the countries page</h1>
            <Link to="/home" className="link">
                <h4>Let's go</h4>
            </Link>
        </div>
    )
}