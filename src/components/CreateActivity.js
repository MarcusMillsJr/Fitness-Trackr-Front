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

    try {
    
      const result = await createActivity(token, name, description);

      setActivities([...activities, result]);
      console.log("Activities second-->", activities);
      navigate.push("/activities");
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
        placeholder="enter name"
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
        placeholder="enter description"
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
