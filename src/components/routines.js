import {SingleRoutine,} from './index'
const Routines = ({routines, setRoutines}) => {

    return(
        <>
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