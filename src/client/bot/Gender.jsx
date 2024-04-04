import React from "react";

export default function Gender(props) {
  // let botMessage = "Enter you age:\n உங்கள் வயதை உள்ளிடவும்";
  let botMessage = "Enter you age:";
  // console.log(props);
  const setGender = (event) => {
    let choice = event.target.textContent;
    props.setState((state) => ({ ...state, gender: choice }));
    document.getElementById("gender").style.display = "none";
    props.actions.handleEvent(choice, botMessage);
  };
  return (
    <div id="gender" className="options-container">
      <button className="btn" onClick={(event) => setGender(event)}>
        Male
      </button>
      <button className="btn" onClick={(event) => setGender(event)}>
        Female
      </button>
      <button className="btn" onClick={(event) => setGender(event)}>
        Transgender
      </button>
    </div>
  );
}
