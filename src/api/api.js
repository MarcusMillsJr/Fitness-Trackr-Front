const baseURL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function fetchPublicRoutines() {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function createRoutine(name, goal, token) {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic: true,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function updateRoutine(routineId, name, goal, token) {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function deleteRoutine(routineId, token) {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function addActivityToRoutine(
  activityId,
  count,
  duration,
  routineId,
  token
) {
  try {
    const response = await fetch(
      `${baseURL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function updateRoutineActivity(
  count,
  duration,
  token,
  routineActivityId
) {
  try {
    const response = await fetch(
      `${baseURL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function deleteRoutineActivity(token, routineActivityId) {
  try {
    const response = await fetch(
      `${baseURL}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

//Post /api/users/register
export const registerUser = async (userObject) => {
  try {
    const url = `${baseURL}/users/register`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userObject.user,
        password: userObject.password,
      }),
    });
    const json = await response.json();

    localStorage.setItem("fitness_tracker_JWT", json.token);

    return json;
  } catch (error) {
    console.error(error);
    window.alert("A user by that username already exists");
  }
};

//POST /api/users/login
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Error logging in. Please check your username and password and try again."
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

//GET /api/users/me
export const getUser = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    window.alert("Error getting users details");
  }
};

export const getActivities = async (token) => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const activities = await response.json();
    return activities;
  } catch (error) {
    console.error("error fetching activities");
  }
};

export const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
