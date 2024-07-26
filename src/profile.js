import { UserContextcard } from "./App";
import { useContext } from "react";
import Navigation from "./Navigation";
import { useEffect } from "react";
function Profile(){
    // const {globalUserObject, setGlobalUserObject} = useContext(UserContextcard);
    const {globalisLogin, globalsetIsLogin} = useContext(UserContextcard);
    const {userDetails, setUserDetails} = useContext(UserContextcard);

    //retrieving
    useEffect(() => {
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log("name");
    })



    const logoutAction = () => {
        console.log(globalisLogin);
        // setGlobalUserObject(false);
        globalsetIsLogin(false);
        console.log(globalisLogin);
    }
    return(
        <div>
            <Navigation/>
        <div className="card" style={{width: '18rem', marginLeft:'500px', marginTop:'15px'}}>
            {/* console.log(userDetails); */}
            {/* {userDetails.map((user, index) => <li key={index}>{user}</li>)} */}

            <div className="card-body" style={{width: '18rem'}}>
            <div>
                        <h5 className="card-title">Profile</h5>
                        <p className="card-text">Your Details</p>
                    </div>

                    <div style={{marginTop:'18px', display:'flex', flexDirection:'column'}}>
                        <p>College Id</p>
                        <p><h6>{userDetails.collegeIdValue}</h6></p>
                    </div>

                    <div>
                    <p>Password</p>
                    <h6>{userDetails.password}</h6>
                    </div>

                    <p>Email address</p>
                    <h6>{userDetails.emailid}</h6>

                    <p>Branch</p>
                    <h6>{userDetails.branchValue}</h6>

                    <p>Year</p>
                    <h6>{userDetails.yearValue}</h6>

                    <p>Gender</p>
                    <h6>{userDetails.yearValue}</h6>

                    <button class="btn btn-primary" onClick={logoutAction}>Logout</button>
            </div>
        </div>

        </div>
       
    );
}

export default Profile;