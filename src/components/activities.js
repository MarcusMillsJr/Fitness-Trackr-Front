import React from "react";
import { Link } from "react-router-dom";

const Activities = (props) => {
  const { activities } = props;

  console.log("this is activities prop --->", activities);

  return (
    //if loggin in then say hello ${users name}

    <>
      <Link to="/createactivity" className="create-activity">
        Create New Activity
      </Link>
      <p>
        This will be where activies are listed and able to be seen, also want to
        add a button/link to create a new activity which will be a form If an
        activity already exists, throw an error
      </p>
      <p>This is </p>
      <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>

      
    </>
  );
};

export default Activities;
