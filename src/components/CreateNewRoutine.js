import { useState } from "react";
import { createRoutine } from "../api/api";
const CreateNewRoutine = ({routines, setRoutines, token, user}) => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const newRoutine = await createRoutine(name, goal, token)
        newRoutine.creatorName = user.username
        newRoutine.activities = [];
        setRoutines([...routines, newRoutine]);
        setName('')
        setGoal('')
    }
    return (
        <form className="routine-forms" onSubmit={handleSubmit}>
            <h3>Create Routine</h3>
            <input required className="text-input" type="text" value={name} placeholder="Routine Name" onChange={event => setName(event.target.value)}></input>
            <input required className="text-input" type="text" value={goal} placeholder="Routine Goal" onChange={event => setGoal(event.target.value)}></input>
            <button className="submit-button" type="submit" value="Submit">Submit</button>
        </form>
    )
}
export default CreateNewRoutine;