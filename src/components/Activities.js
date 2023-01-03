import React from "react";
import { Link } from "react-router-dom";

const Activities = ({user, activities}) => {
  
  console.log('user.username --->', user.username);

  // console.log("this is activities prop --->", activities);

  return (
    <>
        <h1 className="activity-title">ACTIVITIES</h1>
          <div className="act-body">
            {activities.map((activity) => (
              <div className="maptivity">
                <h3 className="activity-user">{user.username}</h3>
                  <p className="activity-name">ACTIVITY: {activity.name}</p>
                  <p className="activity-description">DESCRIPTION: {activity.description}</p>
                  <Link to="/createactivity" className="activitycreate">
                    Create Activity
                  </Link>
              </div>
            ))}
          </div>
    </>
  );
};

export default Activities;
