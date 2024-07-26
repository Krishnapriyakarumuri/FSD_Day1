import { useContext, useState } from "react";
import Toggle from "./toggleViews";
import { Link } from "react-router-dom";
import { createContext } from "react";
import Welcome from "./Welcome";
import { UserContextcard } from "./App";


export const UserContext = createContext(); //to create a context from createContext library

function Home(){
    // const[isLogin, setIsLogin] = useState(false);
    const {globalisLogin, globalsetIsLogin} = useContext(UserContextcard);
    const {globalisRegister, globalsetIsRegister} = useContext(UserContextcard);
    const[isRegister, setIsRegister] = useState(false);
    // const[globalCount, LoginsetGlobalCount] = useState(false);
    return(
        <UserContext.Provider value={{isRegister, setIsRegister}}>
            <div>
                {/* <button><Link to="/">Home</Link></button> */}
                {
                    globalisLogin ?
                    <Welcome/>
                    : <Toggle/>
                }
            </div>
        </UserContext.Provider>
    );
}

export default Home;