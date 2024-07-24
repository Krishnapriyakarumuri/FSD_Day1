import { useState } from "react";
import Login from "./loginpage";
import Register from "./registerpage";
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
            <button onClick={showLogin} style={{marginLeft:'570px', marginTop:'10px'}}>Login</button>
            <button onClick={showRegister}>Register</button>
            {isLogin ? 
            <Login/>
                // <div>Login message</div>
                :
            <Register/>
        }

        </div>

    );


}

export default Toggle;