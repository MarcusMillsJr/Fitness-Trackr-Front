import React from "react";
import { Link } from "react-router-dom";

const Activities = (props) => {
  const { activities } = props;

  // console.log("this is activities prop --->", activities);

  return (
    <>
    <div className="activities-page">
    <div className="create-activity">
    </div>
    <div className="list-activities">
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <b><p>ACTIVITY</p></b>
          <p>{activity.name}</p>
          <b>DESCRIPTION:</b> 
          <b><p>{activity.description}</p></b>
          <Link to="/createactivity" className="create-activity-link">
        Create New Activity
      </Link>
          </li>
      ))}
    </ul>
    </div>
    </div>
    
     

      
    </>
  );
};

export default Activities;
