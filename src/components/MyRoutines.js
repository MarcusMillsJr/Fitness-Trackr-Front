import {SingleRoutine, CreateNewRoutine, EditRoutine, AddActivityToRoutine} from './index'
import { useState, useEffect } from "react"
const MyRoutines = ({user, routines, setRoutines, token}) => {
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
        <div id='my-routines'>
            <div className="card-container">
                {userRoutines.map((routine, index) => {
                    return (
                    <SingleRoutine key={index} routine={routine} setEditRoutine={setEditRoutine} setAddActivityTo={setAddActivityTo} token={token} />
                    )
                })}
                
            </div>
            {Object.keys(addActivityTo).length ? <AddActivityToRoutine setAddActivityTo={setAddActivityTo}/> :
            Object.keys(editedRoutine).length ? <EditRoutine
             routines={routines} editedRoutine={editedRoutine} token={token}
              setEditRoutine={setEditRoutine} setRoutines={setRoutines}/> : <CreateNewRoutine user={user} routines={routines} setRoutines={setRoutines} token={token}/>}
              </div>
        </>
    )
}
export default MyRoutines