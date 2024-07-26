

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toggle from "./toggleViews";
import DataFetchingcard from "./cardlistday3";
import Home from "./Home";
import { createContext } from "react";
import { useState } from "react";
import Profile from "./profile";
import Cart from "./cart";

export const UserContextcard = createContext();
// at given path render a component 
function App(){
    const[globalCount, setGlobalCount] = useState(0);
    const[userDetails, setUserDetails] = useState({});
    const[globalisLogin, globalsetIsLogin] = useState(false);
    const [globalisRegister, globalsetIsRegister] = useState(false);
    const [globalUserObject, setGlobalUserObject] = useState(false);
    const [globalUserCart, globalsetUserCart] = useState([]);
    const [globalListObject, globalsetListObject] = useState([]);

    return(
        <UserContextcard.Provider value={{globalCount, setGlobalCount, userDetails, setUserDetails, globalisLogin, globalsetIsLogin, globalisRegister, globalsetIsRegister, globalUserObject, setGlobalUserObject, globalUserCart, globalsetUserCart, globalListObject, globalsetListObject}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/product" element = {<DataFetchingcard/>} />
                    <Route path="/profile" element = {<Profile/>}/>
                    <Route path="/cart" element = {<Cart/>}/>
                    
                </Routes>
            </BrowserRouter>

        </UserContextcard.Provider>

    );
}

export default App;