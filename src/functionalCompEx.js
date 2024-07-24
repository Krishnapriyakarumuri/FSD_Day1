import { useEffect, useState } from "react";


function FunComEx() {
    // const count = 0;
    const [count, setCount] = useState(0);

    // useEffect hook will be called and executed only once(hwen the component is getting mounted into the DOM)
    // [] --> dependancy in useEffect, it will execute only once, if we include count , it will be excuted everytime we update count
    useEffect(() => {
        // setCount(5);
        console.log("Use effect is called");
    }, [count]);
    const handlesetCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>The value of count is {count}</h1>
            {/* <input type="number" id="no" onChange={(handlesetCount)}/> */}
            <button className="btn btn-dark" onClick={handlesetCount}>Click Me!!</button>
        </div>
    );
}



export default FunComEx;