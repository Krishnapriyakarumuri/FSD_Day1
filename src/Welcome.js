import {Link} from "react-router-dom";
import Navigation from "./Navigation";

function Welcome(){
    return(
        <div>
            <Navigation/>
            <h1>Welcome to SVES Commerce</h1>
            {/* <Link to="/product">View Products</Link> */}
        </div>
    );
}

export default Welcome;