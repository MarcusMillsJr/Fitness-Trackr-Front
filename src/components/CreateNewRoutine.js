import { useState } from "react";
import { createRoutine } from "../api/api";
const CreateNewRoutine = () => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const handleSubmit = async (event) => {
        event.preventdefault()
        await createRoutine(name, goal)
        setName('')
        setGoal('')
    }
    return (
        <form id="create-routine" onSubmit={handleSubmit}>
            <input className="text-input" type="text" value={name} placeholder="Routine Name" onChange={event => setName(event.target.value)}></input>
            <input className="text-input" type="text" value={goal} placeholder="Routine Goal" onChange={event => setGoal(event.target.value)}></input>
            <button id="submit-button" type="submit" value="Submit">Submit</button>
        </form>
    )
}
export default CreateNewRoutine;