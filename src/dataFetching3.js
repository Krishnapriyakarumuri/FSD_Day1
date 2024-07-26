import {useEffect, useState} from "react";
import axios from "axios";
function DataFetchingaxios3() {
    //create a state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchMyData = async ()=> {
            const res = await axios.get('https://fakestoreapi.com/users');
            console.log(res.ok);
            console.log(res.data);
            const resData = await res.data;
            setData(resData);

        }
        fetchMyData();

    }, [])

    return(
        <div>Data Fetching
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Address</th> */}
                        <th scope="col">City</th>
                        <th scope="col">Geo Location</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                        {data.map((dataItem, index) => 
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.phone}</td>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.name.lastname}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.address.city}</td>
                                <td>Number : {dataItem.address.number}, Street : {dataItem.address.street}, Zipcode : {dataItem.address.zipcode}</td>
                                <td>{dataItem.password}</td>
                                
                                
                            </tr>)}
                </tbody>
            </table>
            
        </div>
    );
}

export default DataFetchingaxios3;