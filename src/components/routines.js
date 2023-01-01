import { useEffect, useState } from "react"
import { fetchPublicRoutines } from "../api/api"
import {CreateNewRoutine, SingleRoutine, EditRoutine} from './index'
const Routines = () => {
    const [routines, setRoutines] = useState([])
    const [editedRoutine, setEditRoutine] = useState({})
    useEffect(() => {
        fetchPublicRoutines().then(result => setRoutines(result))
    }, [])
    return(
        <>
        <h2>Routines</h2>
            <div className="card-container">
                {routines.map((routine, index) => {
                    return (
                    <SingleRoutine key={index} routine={routine} setEditRoutine={setEditRoutine} token={'sjgjhdfsbjghsf'} />
                    )
                })}
                
            </div>
            {Object.keys(editedRoutine).length > 0 ? <EditRoutine
             routines={routines} editedRoutine={editedRoutine}
              setEditRoutine={setEditRoutine} setRoutines={setRoutines}/> : <CreateNewRoutine />}
        </>
    )
}
export default Routines