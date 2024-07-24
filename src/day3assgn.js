import {useEffect, useState} from "react";
function DataFetchingCard() {
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
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((dataItem, index) => 
                <div key={index} className="card" style={{width: '18rem', display:'flex', flexWrap:'nowrap'}}>
                    <div className="card-body">
                        {dataItem.body}
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default DataFetchingCard;