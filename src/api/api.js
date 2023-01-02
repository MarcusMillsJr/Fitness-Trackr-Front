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
export const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/'

//Post /api/users/register
export const registerUser = async (userObject) => {
  const url = `${baseURL}/users/register`;
  const response = await fetch(url, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: userObject.user,
          password: userObject.password
      }),
  });
  const json = await response.json();
  console.log(json);

  localStorage.setItem('fitness_tracker_JWT', json.token)

  return json;
}

//POST /api/users/login
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username,
          password
      })
    })
    
    const result = await response.json();
    return result;
    
  } catch(ex) {
    console.log("error logging in user")
  }
}

//GET /api/users/me
export const getUser = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    
    const result = await response.json();
    return result;
    
  } catch(ex) {
    console.log('error getting users details')
  }
}