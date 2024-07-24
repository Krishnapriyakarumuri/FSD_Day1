import { useEffect, useState } from "react";
import './IncDec.css';
function Increanddec(){
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log("Use effect!!")
    }, []);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0)
            setCount(count - 1);
    }

    const btnAddtoCart = () => {
        setCount(1);
    }

    return(
        <div> 
            {count == 0 ? 
                <div>
                <button className = "addtocartBtn" onClick={btnAddtoCart}>Add to Cart</button>
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