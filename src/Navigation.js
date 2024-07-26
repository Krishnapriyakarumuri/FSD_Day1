import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./Home";
import { UserContextcard } from "./App";
function Navigation(){
    const navigate = useNavigate();
    const {globalCount} = useContext(UserContextcard);
    const {globalisLogin, globalsetIsLogin} = useContext(UserContextcard);
    const logoutAction = () => {
        // console.log(globalisLogin);
        // setGlobalUserObject(false);
        globalsetIsLogin(false);
        navigate('/');
        // console.log(globalisLogin);
    }
    return( 
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', background:'#e5e5e5', padding:'20px'}}>
            <div style={{display:'flex', gap:'10px', cursor:'point'}}>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/product" >Products List</Link></button> 
            </div>
            <div style={{display:'flex', gap:'10px', cursor:'point'}}>
                <button><Link to="/cart">{globalCount > 0 ? '': ''}Cart({globalCount})</Link></button>
                <button><Link to="/profile">Profile</Link></button> 
                <button class="btn btn-primary" onClick={logoutAction}>Logout</button>
            </div>
        </div>

    );
}

export default Navigation;