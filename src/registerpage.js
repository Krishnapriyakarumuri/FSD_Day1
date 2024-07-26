import { useState, useEffect} from 'react';
import { UserContextcard } from './App';
import { useContext } from 'react';
import { UserContext } from './Home';
function Register(){
    // use Context provided by App.js
    const {userDetails, setUserDetails} = useContext(UserContextcard); 
    const {globalisLogin, globalsetIsLogin} = useContext(UserContextcard);
    const [count, setCount] = useState(0);
    const [collegeIdValue, setCollegeId] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [emailid, setemailId] = useState('');
    const [branchValue, setbranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [genderValue, getGende] = useState('');
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     console.log(user);
    // })

    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeIdValue, password, emailid, branchValue, yearValue, genderValue
        };
        globalsetIsLogin(true);
        setUser(obj);
        setUserDetails(obj);
        console.log(obj);
        // console.log(obj);

    }

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }

    const getPassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const getEmailId = (event) => {
        setemailId(event.target.value);
        console.log(event.target.value);
    }

    const getBranchId = (event) => {
        setbranch(event.target.value);
        console.log(event.target.value);
    }

    const getYear = (event) => {
        setYear(event.target.value);
        console.log(event.target.value);
    }

    const getGender = (event) => {
        getGende(event.target.value);
        console.log(event.target.value);
        
    }
    
    return(
        <div className="card" style={{width:'25rem', marginLeft: '475px'}}>
            <div className="card-body">
                <h5 className="card-title">Register</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Provide your details to register</h6>
                <form>
                    <label>College Id</label>
                    <input type="text" style={{width:'100%'}} onChange={getCollegeId} autoFocus/>
                    <label style={{marginTop:'10px'}}>Password</label>
                    <input type="password" style={{width:'100%'}} onChange={getPassword}/>
                    <label style={{marginTop:'10px'}}>Email Id</label>
                    <input type="text" style={{width:'100%'}} onChange={getEmailId}/>
                    <label style={{marginTop:'10px'}}>Branch</label>
                    <select className="form-select" value={branchValue} onChange={getBranchId}>
                        <option value="">Select a branch</option>
                        <option value="CSE">CSE</option>
                        <option value="CSC">CSC</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MEC">MEC</option>
                        <option value="CIV">CIV</option>
                    </select>
                    <label style={{marginTop:'10px'}}>Year</label>
                    <select className="form-select" value={yearValue} onChange={getYear}>
                        <option value="">Select a year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select>
                    <label style={{marginTop:'10px'}}>Gender</label>
                    <div>
                        <div className="form-check-inline" >
                            <input className="form-check-input" type="radio" value="Male"  checked={genderValue === "Male"} onChange={getGender}/>
                            <label className="form-check-label">
                                Male
                            </label>
                            </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" value="Female" checked={genderValue === "Female"} onChange={getGender}/>
                            <label className="form-check-label" >
                                Female
                            </label>
                        </div>
                        <div className="form-check-inline" >
                            <input className="form-check-input" type="radio" value="Other" checked={genderValue === "Other"} onChange={getGender}/>
                            <label className="form-check-label" >
                                Other
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark" style={{marginLeft:'250px', marginTop:'15px'}} onClick={submitData}>Register</button>
                    <p>{user.collegeIdValue}</p>
                </form>
            </div>
        </div>
    );

}

export default Register;