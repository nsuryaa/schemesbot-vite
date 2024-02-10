import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleEvent = (choice = null, botMessage = "", widget = null) => {
    if (choice != null) {
      const userMessage = createClientMessage(`Your choice: ${choice}`);
      updateState(userMessage);
    }
    if (botMessage.length != 0) {
      const message = createChatBotMessage(botMessage, { widget: widget });
      updateState(message);
    }
  };

  const handleAge = (value) => {
    setState((state) => ({ ...state, age: value }));
    const message = createChatBotMessage("Your city", { widget: "City" });
    updateState(message);
  };

  const handleDb = (state) => {
    fetch("http://localhost:3000/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data
        handleSchemesList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSchemesList = (data) => {
    data.map((scheme) => {
      const message = createChatBotMessage(
        `${scheme.scheme_details.title_name}`
      );
      updateState(message);
    });
    // const message = createChatBotMessage(
    //   `${data[0].scheme_details.title_name}`
    // );
    // updateState(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleEvent,
            handleAge,
            // handleSuggest,
            // handleGender,
            // handleError,
            // handleCommunity,
            // handleDiffAbled,
            // handleStudent,
            handleDb,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

// old code

// const handleSuggest = (choice) => {
//   const userMessage = createClientMessage(`Your choice: ${choice}`);
//   const message = createChatBotMessage(
//     "Let's start with the details.\nYour Gender",
//     { widget: "Gender" }
//   );
//   updateState(userMessage);
//   updateState(message);
// };
// const handleGender = (choice) => {
//   const userMessage = createClientMessage(`Your choice: ${choice}`);
//   const message = createChatBotMessage("Enter you age:");
//   updateState(userMessage);
//   updateState(message);
// };

// const handleDiffAbled = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Are you Differently abled ?", {
//     widget: "DiffAbled",
//   });
//   updateState(userMessage);
//   updateState(message);
// };
// const handleStudent = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Are you a student ?", {
//     widget: "Student",
//   });
//   updateState(userMessage);
//   updateState(message);
// };
// const handleCommunity = () => {
//   const message = createChatBotMessage("Your Community", {
//     widget: "Community",
//   });
//   updateState(message);
// };

// const handleDb = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Let me gather the schmes for you.");
//   updateState(userMessage);
//   updateState(message);
// };

//TODO
// const handleError = () => {
//   const message = createChatBotMessage("Please,enter a valid age!");
//   updateState(message);
// };
