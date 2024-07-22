function Condition(){
    const cars = ["RR", "LB", "BH"];
    const colours = ["red", "green", "blue"];
    let enter = true;
    const carsList = cars.map((car, index) => <li key={index}>{car}</li>);
    const coloursList = colours.map((colour, index) => <li key={index}>{colour}</li>);

    return(

        <div>
            {enter ? <h1>Truee</h1> : <div>Falsee</div>}
        </div>
    )

    // return (enter ? <h1>Hi</h1> : <h1>Bye</h1>);

//     if(enter){
//         return (
//             <div>
//                 <h1>List of cars</h1>
//                 <ul>{carsList}</ul>
//             </div>
//         )

//     }else{
//         return (
//             <div>
//                 <h1>List of colours</h1>
//                 <ul>{coloursList}</ul>
//             </div>
//         )
//     }

// }
}

export default Condition;