import { useRef, useState } from "react";

// useRef hook is used to directly interact with DOM elements
function UseRefEx(){

    const firstRef = useRef(null); //reference

    const formSubmitted = (event) => {
        // for default refresh to be prevented
        event.preventDefault(); //prevent reload
        console.log("Form submitted!!");
        console.log(firstRef.current.value);
        // to clear the input field after submitting
        firstRef.current.value = ''; //clear value
    }

    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UseRefEx;