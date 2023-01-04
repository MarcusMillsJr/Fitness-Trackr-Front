import React from "react";
import { Link } from "react-router-dom";
import hoops from "../images/hoops2.jpg";
import CreateActivity from "./CreateActivity";

const Activities = ({ user, activities }) => {
  console.log("user.username --->", user.username);
  console.log('activities -->', activities);

  // console.log("this is activities prop --->", activities);

  return (
    <>
      <div className="activity-create-div">
        <h1 className="dog">{user.username}</h1>
        <Link to="/createactivity" className="activitycreate">
          Create Activity
        </Link>
      </div>
      <div className="act-body">
        {activities.map((activity) => (
          <div className="maptivity">
            <p className="activity-name">ACTIVITY: {activity.name}</p>
            <p className="activity-description">
              DESCRIPTION: {activity.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
