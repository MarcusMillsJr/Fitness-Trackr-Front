import React from "react";
import { Link } from "react-router-dom";

const Activities = (props) => {
  const { activities } = props;

  // console.log("this is activities prop --->", activities);

  return (
    <>
    <div className="activities-page">
    <div className="create-activity">
        <Link to="/createactivity" className="create-activity-link">
        Create New Activity
      </Link>
    </div>
    <div className="list-activities">
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}><b>Activity Name:</b> {activity.name} & <br></br><b>Activity Description:</b> {activity.description}</li>
      ))}
    </ul>
    </div>
    </div>
    
     

      
    </>
  );
};

export default Activities;
