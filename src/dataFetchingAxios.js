import {useEffect, useState} from "react";
import axios from "axios";
function DataFetchingaxios() {
    //create a state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchMyData = async ()=> {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
                        <th scope="col">User ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                        {data.map((dataItem, index) => 
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.userId}</td>
                                <td>{dataItem.title}</td>
                                <td>{dataItem.body}</td>
                            </tr>)}
                </tbody>
            </table>
            
        </div>
    );
}

export default DataFetchingaxios;