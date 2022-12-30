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
  