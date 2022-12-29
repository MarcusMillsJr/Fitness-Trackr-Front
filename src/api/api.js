const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'


export const getActivities = async (token) => {
    // console.log(token);
      try{
          const response = await fetch(`${BASE_URL}/activities`, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token} `
            }});
          // console.log(response, ' fetch post promise');
          const {data} = await response.json();
          // console.log(data, "fetch post data")
          return data.posts
      } catch(error){
          console.error('error fetching posts')
      }
  };
  