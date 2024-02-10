import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Gender from "./Gender";
import City from "./City";
import Community from "./Community";
import DiffAbled from "./DiffAbled";
import Student from "./Stundent";
const botName = "SchemesBot";
const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello! Welcome to ${botName}. How can I assist you today?`,
      {
        widget: "Options",
      }
    ),
  ],

  state: {
    gender: null,
    age: null,
    city: null,
    community: null,
    differentlyAbled: null,
    category: null,
  },
  widgets: [
    {
      widgetName: "Options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Gender",
      widgetFunc: (props) => <Gender {...props} />,
      mapStateToProps: ["gender"],
    },
    {
      widgetName: "City",
      widgetFunc: (props) => <City {...props} />,
      mapStateToProps: ["city"],
    },
    {
      widgetName: "Community",
      widgetFunc: (props) => <Community {...props} />,
      mapStateToProps: ["community"],
    },
    {
      widgetName: "DiffAbled",
      widgetFunc: (props) => <DiffAbled {...props} />,
      mapStateToProps: ["differentlyAbled"],
    },
    {
      widgetName: "Student",
      widgetFunc: (props) => <Student {...props} />,
      mapStateToProps: ["category"],
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
