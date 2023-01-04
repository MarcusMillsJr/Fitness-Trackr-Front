import {SingleRoutine, CreateNewRoutine, EditRoutine, AddActivityToRoutine} from './Index'
import { useState, useEffect } from "react"
const MyRoutines = ({user, routines, activities, setRoutines, setUpdateRoutines, token}) => {
    const [editedRoutine, setEditRoutine] = useState({})
    const [addActivityTo, setAddActivityTo] = useState({})
    const[userRoutines, setUserRoutines] = useState([])
    useEffect(() => {
        const userArray = routines.filter(routine => {
            return user.id === routine.creatorId
        })
        setUserRoutines(userArray)
    }, [user, routines])
    return (
        <>
        <div>
            {user.username}
        </div>
        <div id='my-routines'>
            <div className="card-container">
                {userRoutines.map((routine, index) => {
                    return (
                    <SingleRoutine key={index} routines={routines} routine={routine} setRoutines={setRoutines} setEditRoutine={setEditRoutine} setAddActivityTo={setAddActivityTo} setUpdateRoutines={setUpdateRoutines} token={token} />
                    )
                })}
                
            </div>
            {Object.keys(addActivityTo).length ? <AddActivityToRoutine activities={activities} addActivityTo={addActivityTo} setAddActivityTo={setAddActivityTo} setUpdateRoutines={setUpdateRoutines} token={token}/> :
            Object.keys(editedRoutine).length ? <EditRoutine
             routines={routines} editedRoutine={editedRoutine} token={token}
              setEditRoutine={setEditRoutine} setRoutines={setRoutines}/> : <CreateNewRoutine user={user} routines={routines} setRoutines={setRoutines} token={token}/>}
              </div>
        </>
    )
}
export default MyRoutines