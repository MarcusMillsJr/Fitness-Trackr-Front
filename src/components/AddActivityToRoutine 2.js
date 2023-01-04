import { useState } from "react"

const AddActivityToRoutine = ({routines, setAddActivityTo}) => {
    const [activity, setActivity] = useState('')
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')

    return (
        <form className="routine-forms"
        id="add-activity-form"
        onSubmit={() => {
            setAddActivityTo({})
        }}>
            <label>Choose Activity:</label>
            <select 
                id="activity-dropdown"
                value={activity}
                required
                onChange={(event) => setActivity(event.target.value)}>
                <option>Activity</option>
                {[{name: 'Jim'}, {name: "bill"}].map((activity, index) => <option
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