
// export default function Print(){
//     const cars = ["RR", "LB", "BH"];

//     return cars.map((car) => <li>{car}</li>);
// }

function Print(){
    const cars = ["RR", "LB", "BH"];
    const carsList = cars.map((car, index) => <li key={index}>{car}</li>);
    return (
        <div>
            <h1>List of cars</h1>
            <ul>{carsList}</ul>
        </div>
    )
}

export default Print;