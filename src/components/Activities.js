import React from "react";
import { Link } from "react-router-dom";
const Activities = ({ user, activities, token }) => {
  return (
    <>
      <div className="activity-create-div">
        <h1 className="dog">{user.username}</h1>
        {token ? <Link to="/createactivity" className="activitycreate">
          CREATE NEW ACTIVITY
        </Link>
        : null}
      </div>
      <div className="act-body">
        {activities.map((activity) => (
          <div className="maptivity">
            <p className="activity-name">ACTIVITY:{activity.name}</p>
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
