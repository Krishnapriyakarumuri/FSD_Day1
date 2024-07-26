import {useEffect, useState} from "react";
import Rating from "./rating";
import Increanddec from "./IncrAndDecr";
import Navigation from "./Navigation";
import { UserContextcard } from "./App";
import { useContext } from "react";

// import { Link } from "react-router-dom";
// import { createContext } from "react";

// export const UserContextcard = createContext();
function DataFetchingcard() {
    //create a state variable to assign response JSON
    const [data, setData] = useState([]);
    const {globalListObject, globalsetListObject} = useContext(UserContextcard);
    const {globalUserCart, globalsetUserCart} = useContext(UserContextcard);

    useEffect(() => {
        const fetchMyData = async ()=> {
            const res = await fetch('https://fakestoreapi.com/products');
            console.log(res.ok);
            const resData = await res.json();
            // console.log(await res.json());
            setData(resData);
            globalsetListObject(resData);

            console.log(resData);

        }
        fetchMyData();

    }, [])

    return(
    
        <div >
            <Navigation/>
            {/* <button><Link to="/">Home</Link></button> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap:'20px', marginLeft:'10px', marginTop:'10px' }}>
            {data.map((dataItem, index) => 
                <div key={index} className="card" style={{width: '17rem', height: '28rem', display:'flex', flexWrap:'nowrap'}}>
                    <img src={dataItem.image} style={{width:'150px', height:'150px', marginLeft:'29px', marginTop:'15px'}} alt='dataItem'></img>
                    <div className="card-body">
                        
                        <div>
                            <h6>{dataItem.title}</h6>
                        </div>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <Rating rating={dataItem.rating.rate} />
                            <p style={{marginTop:'15px', marginLeft:'5px'}}>({dataItem.rating.count})</p>
                        </div>
                        <div>
                            <h6>&#8377;{dataItem.price}</h6>
                        </div>
                        <div>
                            <Increanddec key={index} index={index}/>
                        </div>
                    </div>
                </div>
            )}

            </div>
        </div>
    );
}

export default DataFetchingcard;