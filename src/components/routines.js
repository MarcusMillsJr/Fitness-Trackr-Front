import { useEffect, useState } from "react"
import { fetchPublicRoutines } from "../api/api"
import SingleRoutine from "./SingleRoutine"
const Routines = () => {
    const [routines, setRoutines] = useState([])
    useEffect(() => {
        fetchPublicRoutines().then(result => setRoutines(result))
    }, [])
    return(
        <>
        <h2>Routines</h2>
            <div className="card-container">
                {routines.map((routine, index) => {
                    return (
                    <SingleRoutine key={index} routine={routine}/>
                    )
                })}
            </div>
        </>
    )
}
export default Routines