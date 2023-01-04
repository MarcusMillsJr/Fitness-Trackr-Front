import { deleteRoutine, deleteRoutineActivity } from "../api/api";
const SingleRoutine = ({routine, index, setEditRoutine, routines, setRoutines, setAddActivityTo, setUpdateRoutines, token}) => {

    const handleDelete = async () => {
        const deletedRoutine = await deleteRoutine(routine.id, token)
        const newRoutines = routines.filter((routine) => routine.id !== deletedRoutine.id)
        setRoutines(newRoutines)
    }
    
    return (
        <div key={index} className='card'>
            <h3 className="card-header">Routine: {routine.name}</h3>
            <div className="card-body">
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <h4>Activities for {routine.name}</h4>
            {routine.activities ? <div>{routine.activities.map((activity, index) => {return (<div key={index}>
                <p>Activity: {activity.name}  
                <button onClick={async (event) => {                  
                    event.preventDefault()
                    await deleteRoutineActivity(token, activity.routineActivityId)
                    setUpdateRoutines(Math.random())}} 
                    id='delete-activity'><i className="fas fa-trash"></i></button></p>
                <p>Description: {activity.description}</p>
                <p>Duration: {activity.duration}</p>
                <p>Count: {activity.count}</p>
   </div>)})}</div>: <p>Currently no Activities</p>}</div>
   <div id="button-container">
   <button id='edit-click' onClick={() => {setEditRoutine(routine); setAddActivityTo({})}}><i className='fas fa-edit'></i></button>
   <button id='add-activity-button' onClick={() => {setAddActivityTo(routine); setEditRoutine({})} }>Add Activity</button>
   <button id="delete-button" onClick={handleDelete}><i className='fas fa-trash'></i></button>
    </div>
    </div>
    )
}
export default SingleRoutine;