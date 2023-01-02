import {SingleRoutine, CreateNewRoutine, EditRoutine, AddActivityToRoutine} from './index'
import { useState } from "react"
const MyRoutines = ({user, routines, setRoutines}) => {
    const [editedRoutine, setEditRoutine] = useState({})
    const [addActivityTo, setAddActivityTo] = useState({})
    return (
        <>
        {/* <h2>{user.username} Routines</h2> */}
        <div id='my-routines'>
            <div className="card-container">
                {routines.map((routine, index) => {
                    return (
                    <SingleRoutine key={index} routine={routine} setEditRoutine={setEditRoutine} setAddActivityTo={setAddActivityTo} token={'sjgjhdfsbjghsf'} />
                    )
                })}
                
            </div>
            {Object.keys(addActivityTo).length ? <AddActivityToRoutine setAddActivityTo={setAddActivityTo}/> :
            Object.keys(editedRoutine).length ? <EditRoutine
             routines={routines} editedRoutine={editedRoutine}
              setEditRoutine={setEditRoutine} setRoutines={setRoutines}/> : <CreateNewRoutine />}
              </div>
        </>
    )
}
export default MyRoutines