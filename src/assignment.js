function Review(){
    const names = ["Priya", "Asritha"];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    const reviews = ["Good", "Excellent"];
    const reviewList = reviews.map((review, index) => <li key={index}>{review}</li>);

    let nameReview = {"Priya" : "Good", "Asritha" : "Excellent"};



    return(
        <div colspan="2">
            <ul>
                {Object.keys(nameReview).map((key) => (
                <li key={key}>
                    {key}<br/>
                    {nameReview[key]}
                </li>
                ))}
            </ul>
            <img src="../image.png" width="50" height="50"/>
        </div> 
    )

}

export default Review;