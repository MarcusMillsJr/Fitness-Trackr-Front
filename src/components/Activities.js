import React from "react";
import { Link } from "react-router-dom";

const Activities = (props) => {
  const { activities } = props;

  // console.log("this is activities prop --->", activities);

  return (
    <>
        <h1 className="activity-title">ACTIVITIES</h1>
          <div className="act-body">
            {activities.map((activity) => (
              <div className="maptivity">
                  <p>ACTIVITY: {activity.name}</p>
                  <p>DESCRIPTION: {activity.description}</p>
                  <Link to="/createactivity" className="button-contanier">
                    Create News Activity
                  </Link>
              </div>
            ))}
          </div>
    </>
  );
};

export default Activities;
