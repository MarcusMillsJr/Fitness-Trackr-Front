import { deleteRoutine } from "../api/api";
const SingleRoutine = ({routine, index, setEditRoutine, routines, setRoutines, setAddActivityTo, token}) => {

    return (
        <div key={index} className='card'>
            <h3 className="card-header">Routine: {routine.name}</h3>
            <div className="card-body">
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <h4>Activities for {routine.name}</h4>
            {routine.activities ? <div>{routine.activities.map((activity, index) => {return (<div key={index}>
                <p>Activity: {activity.name}</p>
                <p>Description: {activity.description}</p>
                <p>Duration: {activity.duration}</p>
                <p>Count: {activity.count}</p>
   </div>)})}</div>: null}</div>
   <div id="button-container">
   <button id='edit-click' onClick={() => {setEditRoutine(routine); setAddActivityTo({})}}><i className='fas fa-edit'></i></button>
   <button id='add-activity-button' onClick={() => {setAddActivityTo(routine); setEditRoutine({})} }>Add Activity</button>
   <button id="delete-button" onClick={() => {deleteRoutine(routine.id, token, routines, setRoutines)}}><i className='fas fa-trash'></i></button>
    </div>
    </div>
    )
}
export default SingleRoutine;