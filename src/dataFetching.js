import {useEffect, useState} from "react";
function DataFetching() {
    //create a state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyData = async ()=> {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
            const resData = await res.json();
            // console.log(await res.json());
            setData(resData);
            console.log(resData);

        }
        fetchMyData();

    }, [])

    return(
        <div>Data Fetching
            <table class="table">
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

export default DataFetching;