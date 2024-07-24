
// export default function Print(){
//     const cars = ["RR", "LB", "BH"];

//     return cars.map((car) => <li>{car}</li>);
// }

function Print(){
    const cars = ["RR", "LB", "BH"];
    // const carsList = cars.map((car, index) => <li key={index}>{car}</li>);
    return (
        <div>
           <ul>
           {cars.map((car, index) => <li key={index}>{car}</li>)}
            </ul>
            
        </div>
    );
}

export default Print;