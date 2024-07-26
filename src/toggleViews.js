import { useState } from "react";
import Login from "./loginpage";
import Register from "./registerpage";
import Navigation from "./Navigation";
// import './toggleViews.css';
function Toggle(){

    // const [toggle, setValue] = useState(0);
    const [isLogin, setIsLogin] = useState(true);

    const showLogin = () => {
        setIsLogin(true);
    }

    const showRegister = () => {
        setIsLogin(false);
    }

    return (
        <div>
            {/* <Navigation/> */}
            <button onClick={showLogin} style={{marginLeft:'570px', marginTop:'10px', borderRadius: '5px',backgroundColor: '#ffffff'}}>Login</button>
            <button onClick={showRegister} style={{ borderRadius: '5px',backgroundColor: '#ffffff'}}>Register</button>
            {isLogin ? 
            <Login/>
                :
            <Register/>
        }

        </div>

    );


}

export default Toggle;