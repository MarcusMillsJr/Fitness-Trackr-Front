import React from "react";
import { Link } from "react-router-dom";

const Routines = () => {
    return(
        <>
        <div>
            <Link to="/createroutine" className="create-routine">Create Routine Button</Link>
        </div>
        <div>
            <p>other code here</p>
        </div>
        
        </>
    )
}

export default Routines