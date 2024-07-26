import { useRef, useState, useEffect, useContext } from "react";
import './loginpage.css';
import { Link } from "react-router-dom";
import { UserContext } from "./Home";
import { UserContextcard } from "./App";

function Login(){

    const collegeidfRef = useRef(null); //refernce
    const passwordRef = useRef(null); //reference
    const [loginMessage, setMessage] = useState(false);
    const {globalisLogin, globalsetIsLogin} = useContext(UserContextcard);
    const {userDetails, setUserDetails} = useContext(UserContextcard);

    
    //use effect to focus on input field
    useEffect (() => {
        console.log("Use effect!!");
        collegeidfRef.current.focus();
        //storing
        localStorage.setItem("name", "ReactJS");
        localStorage.setItem("branch", "Your branch");
    

    });
    

    const formSubmitted = (event) => {
        event.preventDefault();
        console.log(collegeidfRef.current.value);
        console.log(passwordRef.current.value);
        if(collegeidfRef.current.value !== "" && collegeidfRef.current.value === passwordRef.current.value && userDetails.collegeIdValue === collegeidfRef.current.value && userDetails.
            password === passwordRef.current.value){
            globalsetIsLogin(true);
            console.log("Login Successful!!!");
            setMessage(true);
            // <Link to="/product" >After Login</Link>
        }else if(collegeidfRef.current.value !== "" ){
            console.log("Incorrect");
            setMessage(false);
           
        }
        collegeidfRef.current.value = '';
        passwordRef.current.value = '';

    } 
    return(
        <div className="card" style={{width:'18rem', marginLeft: '500px'}}>
            <div className="card-body" style={{justifySelf:'center'}}>
                <h5 className="card-title">Login</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Provide your details to login</h6>
                <label>College Id</label>
                <form onSubmit={formSubmitted}>
                    {/* <input type="text" ref={collegeidfRef} autoFocus/> */}
                    <input type="text" ref={collegeidfRef} style={{width:'100%'}}/>
                    <label style={{marginTop:'10px'}}>Password</label>
                    <input type="password" ref={passwordRef} style={{width:'100%'}}/>
                    <button type="submit" className="btn btn-dark" style={{marginLeft:'150px', marginTop:'15px'}}>Login</button>
                </form>
               
            </div>
        </div>
    );

}

export default Login;