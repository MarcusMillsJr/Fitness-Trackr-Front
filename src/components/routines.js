import {CreateNewRoutine, SingleRoutine, EditRoutine} from './index'
const Routines = ({routines, setRoutines}) => {

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