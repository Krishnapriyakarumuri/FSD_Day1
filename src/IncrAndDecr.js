import { useContext, useEffect, useState } from "react";
import './IncDec.css';
import { UserContextcard } from "./App";
function Increanddec({index}){
    const {globalCount, setGlobalCount} = useContext(UserContextcard); 
    const {globalListObject, globalsetListObject} = useContext(UserContextcard);
    const {globalUserCart, globalsetUserCart} = useContext(UserContextcard);
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log("Use effect!!")
    }, []);


    const handleIncrement = () => {
        setCount(count + 1);
        setGlobalCount(globalCount + 1);
        const selectedItem = globalListObject[index];
        console.log("Selected Item on Increment:", selectedItem);
        globalsetUserCart((prevCart) => [...prevCart, selectedItem]);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setGlobalCount(globalCount - 1);
            const selectedItem = globalListObject[index];
            console.log("Selected Item on Decrement:", selectedItem);
            globalsetUserCart((prevCart) => {
                const itemIndex = prevCart.findIndex(item => item.id === selectedItem.id);
                if (itemIndex > -1) {
                    const newCart = [...prevCart];
                    newCart.splice(itemIndex, 1);
                    return newCart;
                }
                return prevCart;
            });
        }
    };

    // const handleIncrement = () => {
    //     setCount(count + 1);
    //     setGlobalCount(globalCount + 1);
    // }

    // const handleDecrement = () => {
    //     if(count > 0){
    //         setCount(count - 1);
    //         setGlobalCount(globalCount - 1);
    //     }
           
    // }

    // const btnAddtoCart = () => {
    //     setCount(1);
    //     setGlobalCount(globalCount + 1);
    //     globalsetUserCart(...globalListObject, globalListObject[index]);
    //     console.log(globalListObject[index]);
    // }

    return(
        <div> 
            {count === 0 ? 
                <div>
                <button className = "addtocartBtn" onClick={handleIncrement}>Add to Cart</button>
                </div>
                 : 

                <div className="divvtag">
                {/* <button className = "btn btn-outline-dark btn-sm">Hii</button> */}
                <button className="btnn" onClick={handleDecrement}>-</button>
                <span className="cnt">{count}</span>
                <button className="btnn" onClick={handleIncrement}>+</button>

             </div>
                }
        </div>

        
    );
}

export default Increanddec;