import { useState } from "react"
import { updateRoutine } from "../api/api"
const EditRoutine =({editedRoutine, routines, setRoutines, setEditRoutine, token}) => {
    const [routineName, setRoutineName] = useState(editedRoutine.name)
    const [goal, setGoal] = useState(editedRoutine.goal)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedRoutine = await updateRoutine(editedRoutine.id, routineName, goal, token)
        const newRoutines = routines.map(routine => {
            return routine.id === updatedRoutine.id ? updatedRoutine : routine;
        })
        setRoutines(newRoutines)
        setEditRoutine({})
    }
    return (
        <form className="routine-forms" onSubmit={handleSubmit}>
            <h3>Edit Routine</h3>
            <label>Routine Name:</label>
            <input className="text-input" type='text' value={routineName} onChange={event => setRoutineName(event.target.value)}></input>
            <label>Routine Goal:</label>
            <input className="text-input" type='text' value={goal} onChange={event => setGoal(event.target.value)}></input>
            <button id='edit-button' type="submit">Edit Post</button>
        </form>
    )
}
export default EditRoutine