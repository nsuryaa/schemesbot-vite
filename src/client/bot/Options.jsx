import React from "react";

export default function Options(props) {
  let botMessage = "Let's start with the details.\nYour Gender";
  let widget = "Gender";
  // console.log(props);
  const Suggest = (event) => {
    let value = event.target.textContent;
    props.actions.handleEvent(value, botMessage, widget);
    document.getElementById("options").style.display = "none"; //TODO Have to fix
  };
  return (
    <div id="options" className="options-container ">
      <button className="btn">search scheme</button>
      <button className="btn">latest schemes</button>
      <button className="btn" onClick={(event) => Suggest(event)}>
        suggest scheme
      </button>
      <button className="btn">FAQ</button>
    </div>
  );
}
