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

export const getActivities = async (token) => {
  // console.log(token);
    try{
        const response = await fetch(`${baseURL}/activities`, {
        headers: {
            'Content-Type': 'application/json',
          }});
        
        const activities = await response.json();
      //   console.log(activities, "fetched activities data")
        return activities
    } catch(error){
        console.error('error fetching activities')
    }
};

export const createActivity = async (token, name, description) => {
  try{
      const response = await fetch(`${baseURL}/actvities`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
              post: {
                  name,
                  description,
                }
            })
          })

          const data = await response.json()
          console.log('data from createActivity', data);
          return data
      } catch (error) {
  console.log("error creating post", error);
}
}

