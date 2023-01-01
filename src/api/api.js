const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'

export async function fetchPublicRoutines(){
    try{
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        return result;
    } catch(error){
        throw error
    }
}
export async function createRoutine(name, goal, token){
    try{
        const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic: true
            })
        })
        const result = await response.json();
        return result
    } catch(error) {
        throw error
    }
}
export async function updateRoutine(routineId, name, goal, token){
    try{
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal,
            })
        })
        const result = await response.json();
        return result
    } catch(error) {
        throw error
    }
}
export async function deleteRoutine(routineId, token, routines, setRoutines){
    try{
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const newRoutines = routines.filter((routine) => routine.id !== routineId)
        setRoutines(newRoutines)
        const result = await response.json();
        return result
    } catch(error){
        throw error
    }
}
export async function addActivityToRoutine(activityId, count, duration, routineId, token){
    try{
        const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                activityId,
                count,
                duration
            })
        })
        const result = await response.json();
        return result
    } catch(error){
        throw error
    }
}
export async function updateRoutineActivity(count, duration, token, routineActivityId){
    try{
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                count,
                duration,
            })
        })
        const result = await response.json();
        return result
    } catch(error) {
        throw error
    }
}
export async function deleteRoutineActivity(token, routineActivityId){
    try{
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result
    } catch(error) {
        throw error
    }
}