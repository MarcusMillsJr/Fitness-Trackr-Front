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