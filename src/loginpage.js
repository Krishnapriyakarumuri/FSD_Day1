import { useRef, useState, useEffect } from "react";
import './loginpage.css';

function Login(){

    const collegeidfRef = useRef(null); //refernce
    const passwordRef = useRef(null); //reference
    const [loginMessage, setMessage] = useState('');
    
    //use effect to focus on input field
    useEffect (() => {
        console.log("Use effect!!");
        collegeidfRef.current.focus();
    });
    

    const formSubmitted = (event) => {
        event.preventDefault();
        console.log(collegeidfRef.current.value);
        console.log(passwordRef.current.value);
        if(collegeidfRef.current.value !== "" && collegeidfRef.current.value === passwordRef.current.value){
            console.log("Login Successful!!!");
            setMessage("Correct")
        }else if(collegeidfRef.current.value !== "" ){
            console.log("Incorrect");
            setMessage("Incorrect")
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
                    <h6>{loginMessage}</h6>
                </form>
               
            </div>
        </div>
    );

}

export default Login;