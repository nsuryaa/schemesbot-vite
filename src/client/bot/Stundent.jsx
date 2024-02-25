import React, { useEffect, useRef } from "react";

export default function Student(props) {
  let botMessage = "Let me gather the schemes for you.";
  let widget = "SchemesList";
  const setStudent = (event) => {
    let value = event.target.textContent;
    let newState = { ...props.state, category: value };
    props.setState(newState);
    props.actions.handleDb(newState);
    document.getElementById("student").style.display = "none";
    props.actions.handleEvent(value, botMessage, widget);
  };

  // props.actions.handleDb(props.state)
  // useEffect(() => {
  //   props.actions.handleDb(props.state);
  //   console.log(props.state.category);
  // }, [props.state.category]);
  return (
    <div id="student" className="options-container">
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Farmers
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Manufacturers
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Students
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Handloom weavers
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Journalists
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Unemployed
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setStudent(event);
        }}
      >
        Government Employees
      </button>
    </div>
  );
}
