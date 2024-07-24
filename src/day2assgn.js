import './day2assgn.css';
import { useEffect, useState } from "react";
function SvesCommerce(){

    const [review, setReview] = useState('');
    const [reviewList] = useState([]);

    const customerName = "Reviewer name";
    const cost = 25000;

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

    const inputValueChange = (event) => {
        setReview(event.target.value);
        console.log("Input Changed");
        console.log(event.target.value);

    }

    const addReviewList = () => {
        reviewList.push(review);
        setReview('');

    }

    return(
        <div>
            <h2 style={{marginLeft:'15px', marginTop:'20px'}}>Product Name</h2>
        <div className='card'>
            <div className="product-details" style={{display:'flex', flexWrap:'nowrap', alignItems: 'flex-start'}}>
                <img src='../image.png' width="250px" height="250px" style={{marginLeft:'15px', marginTop:'20px'}} />
                <div style={{marginLeft:'25px', marginTop:'20px'}}>
                    <h5>Product Name</h5>
                    <p>
                    Description Description Description 
                    Description Description
                    Description Description 
                    Description Description Description
                    Description Description Description Description 
                    </p>
                    <div>
                    <h4>&#8377;{cost}</h4>
                    </div>

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

                </div>
            </div>

            <hr style={{ border: '1px solid black', width: '100%' }} />

            <div className="productspecifications">
                <div>
                    <h5 style={{marginLeft:'15px', marginTop:'20px'}}>Product specifications</h5>
                </div>
                <div>
                    <p style={{marginLeft:'15px', marginTop:'20px'}}>
                        Description Description Description Description Description Description Description 
                        Description Description Description Description Description Description Description 
                        Description Description Description Description Description Description Description 
                        Description Description
                    </p>
                </div>
            </div>

            <hr style={{ border: '1px solid black', width: '100%' }} />
            
            <div className="reviews">
                <h5 style={{marginTop:'8px', marginLeft:'15px'}}>Reviews</h5>
                <div className="review-list">
                    <input type="text" placeholder="Type to review" onChange={inputValueChange}  style={{flex: 1, marginRight: '10px'}}></input>
                    <button className="btn btn-dark" onClick={addReviewList}>Add review</button>
                </div>
                <div>
                    <h6 style={{marginLeft:'15px', marginTop:'20px'}}>Reviews</h6>
                </div>
                <p style={{marginLeft : '15px'}}>{
                    reviewList.map((review, index) => <p key={index}>
                        <div>
                            {customerName}
                        </div>
                        <div>
                            <h6>{review}</h6>
                        </div>
                        
                    </p>)
                }</p>
            </div>

        </div>
        </div>
    )
}

export default SvesCommerce;
