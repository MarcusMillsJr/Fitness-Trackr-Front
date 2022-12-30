const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'


export const getActivities = async (token) => {
    // console.log(token);
      try{
          const response = await fetch(`${BASE_URL}/activities`, {
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
        const response = await fetch(`${BASE_URL}/actvities`, {
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
