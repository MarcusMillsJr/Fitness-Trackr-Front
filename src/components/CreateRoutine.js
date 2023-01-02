import React from "react";

const CreateRoutine = () => {


return(
<>
<form>
    <label>CREATE NEW ROUTINE</label>
    <div>
        <input
        type="text"
        placeholder="name"
        autoComplete="off"
        // value={}
         // onChange={}
         required
         ></input>
         <input
         type="text"
         placeholder="goal"
         autoComplete="off"
         // value={}
         // onChange={}
        required
        ></input>
    </div>
    <button type="submit" className="submit-btn">Submit</button>
</form>
</>)
}

export default CreateRoutine