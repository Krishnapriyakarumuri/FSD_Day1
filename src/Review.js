import { useEffect, useState } from "react";
function Reviews(){

    const [review, setReview] = useState('');
    const [reviewList] = useState([]);

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
        // <div>
        //     <input type="text" placeholder="Enter a reviews" onChange={inputValueChange} value={review}></input>
        //     <button className="btn btn-dark" onClick={addReview}>Click Me!!</button>
        //     <p>{reviewDisplay}</p>
        // </div>
        <div>
            <input type="text" placeholder="Enter a reviews" onChange={inputValueChange} ></input>
            <button className="btn btn-dark" onClick={addReviewList}>Click Me!!</button>
            <p>{
                reviewList.map((review, index) => <p key={index}>{review}</p>)
            }</p>
        </div>
    )
}

export default Reviews;