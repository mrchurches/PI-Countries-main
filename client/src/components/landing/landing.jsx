import { Link } from "react-router-dom";
import "./landing.css"
export default function Landing(){
    return(
        <div className="landing">
            <h1>The countries page</h1>
            <Link to="/home" className="link">
                <h4>Enter</h4>
            </Link>
        </div>
    )
}