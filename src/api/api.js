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