
const SingleRoutine = ({routine, index}) => {

    return (
        <div key={index}>
            <h3>Routine: {routine.name}</h3>
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <h4>Activities for {routine.name}</h4>
            <div>{routine.activities.map((activity, index) => {return (<div key={index}>
                <p>Activity: {activity.name}</p>
                <p>Description: {activity.description}</p>
                <p>Duration: {activity.duration}</p>
                <p>Count: {activity.count}</p>
   </div>)})}</div>
    </div>
    )
}
export default SingleRoutine;