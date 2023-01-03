import { useState } from "react"
import { addActivityToRoutine } from "../api/api"
const AddActivityToRoutine = ({routines, addActivityTo, activities, setAddActivityTo, token}) => {
    const [activity, setActivity] = useState('')
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')

    const handleAddActivity = async (event) => {
        event.preventDefault()
        const [newActivity] = activities.filter(activityy => activity === activityy.name)
        console.log(addActivityTo)
        const newAddedActivity = await addActivityToRoutine(newActivity.id, count, duration, addActivityTo.id, token)
        console.log(newAddedActivity)
        setAddActivityTo({})
        setCount('')
        setDuration('')
        setActivity('')
    }
    return (
        <form className="routine-forms"
        id="add-activity-form"
        onSubmit={handleAddActivity}>
            <label>Choose Activity:</label>
            <select 
                id="activity-dropdown"
                value={activity}
                required
                onChange={(event) => setActivity(event.target.value)}>
                {activities.map((activity, index) => <option
                key={index} value={activity.name}>{activity.name}</option>)}
            </select>
        <span><label>Count: </label>
        <input type='number'
            className="num-input"
            value={count} 
            onChange={(event) => setCount(event.target.value)}></input></span>
        <span><label>Duration: </label>
        <input type='number'
            className="num-input"
            value={duration} 
            onChange={(event) => setDuration(event.target.value)}></input></span>
            <span>
                <button className="cancel-button" onClick={() => setAddActivityTo({})}>Cancel</button>
                <button id='add-activity-cancel'className="submit-button" type="submit">Submit</button>
            </span>    
        </form>
    )
}
export default AddActivityToRoutine;