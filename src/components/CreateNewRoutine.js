import { useState } from "react";
const CreateNewRoutine = () => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    return (
        <form id="create-routine">
            <input className="text-input" type="text" id="name" placeholder="Routine Name"></input>
            <input className="text-input" type="text" id="goal" placeholder="Routine Goal"></input>
            <button id="submit-button" type="submit" value="Submit">Submit</button>
        </form>
    )
}
export default CreateNewRoutine;