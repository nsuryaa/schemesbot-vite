import React from "react";

export default function City(props) {
  var TamilNadu = [
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];
  const selectValue = (event) => {
    let botMessage = "Your Community";
    let widget = "Community";
    let e = document.getElementById("select");
    let value = e.value;
    props.setState((state) => ({ ...state, city: value }));
    // var text = e.options[e.selectedIndex].text;
    console.log(value);
    props.actions.handleEvent(value, botMessage, widget);
  };
  return (
    <div className="option-city">
      <select
        id="select"
        name="city"
        className="city"
        defaultValue="---select one---"
        onChange={(event) => {
          selectValue(event);
        }}
      >
        {TamilNadu.map((item, index) => (
          <option className="city" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
