import { deleteRoutine } from "../api/api";
const SingleRoutine = ({routine, index, setEditRoutine, routines, setRoutines, token}) => {

    return (
        <div key={index} className='card'>
            <h3 className="card-header">Routine: {routine.name}</h3>
            <div className="card-body">
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <h4>Activities for {routine.name}</h4>
            <div>{routine.activities.map((activity, index) => {return (<div key={index}>
                <p>Activity: {activity.name}</p>
                <p>Description: {activity.description}</p>
                <p>Duration: {activity.duration}</p>
                <p>Count: {activity.count}</p>
   </div>)})}</div></div>
   <button onClick={() => setEditRoutine(routine)}>Edit Post</button>
   <button id="delete-button" onClick={() => {deleteRoutine(routine.id, token, routines, setRoutines)}}>Delete</button>
    </div>
    )
}
export default SingleRoutine;