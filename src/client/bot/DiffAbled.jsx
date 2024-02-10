import React from "react";

export default function DiffAbled(props) {
  let botMessage = "Which category best describes you?";
  let widget = "Student";
  const setDiffAbled = (event) => {
    let value = event.target.textContent;
    props.setState((state) => ({ ...state, differentlyAbled: value }));
    document.getElementById("diff-abled").style.display = "none";
    props.actions.handleEvent(value, botMessage, widget);
  };
  return (
    <div id="diff-abled" className="options-container">
      <button
        className="btn"
        onClick={(event) => {
          setDiffAbled(event);
        }}
      >
        Yes
      </button>
      <button
        className="btn"
        onClick={(event) => {
          setDiffAbled(event);
        }}
      >
        No
      </button>
    </div>
  );
}
