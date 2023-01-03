import React, { useState } from "react";
import { createActivity } from "../api/api";
import { useNavigate } from "react-router-dom";
import hoops from '../images/hoops2.jpg'

// console.log('createActivity call', createActivity());
const CreateActivity = ({ token, activities, setActivities }) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  const onFormSubmit = async (event) => {
    event.preventDefault();
    
    const array = activities.filter((activity) =>{
      return name === activity.name
    })

    try {
      if(!array.length){
        const result = await createActivity(token, name, description);

      setActivities([...activities, result]);
      setDescription("")
      setName("")
      navigate("/activities")
      } else {
        alert("activity exists already")
      }

    } catch (error) {
      console.error("error creating post");
    }
  };

  return (<>
    <img src={hoops} alt="friends about to skate" className="hoops"/>

    <h2 className="activity-title">CREATE NEW ACTIVITY</h2>
    <form className="activity-form" onSubmit={onFormSubmit}>

      <label htmlFor="title" className="activity-label">
        ACTIVITY NAME
      </label>
      <input
        type="text"
        placeholder="name of activity"
        className="forminput"
        autoComplete="off"
        value={name}
        onChange={(event) => {
           setName(event.target.value);
        }}
      ></input>

      <label htmlFor="price" className="activity-label">
        DESCRIPTION
      </label>
      <input
        type="text"
        placeholder="description of activity"
        className="forminput"
        autoComplete="off"
        value={description}
        onChange={(event) => {
           setDescription(event.target.value);
        }}
      ></input>
      <button type="submit" className="formbutton">
        CREATE
      </button>
    </form>
  </>
    
  );
};

export default CreateActivity;
