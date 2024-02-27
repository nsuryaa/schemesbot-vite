import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Gender from "./Gender";
import City from "./City";
import Community from "./Community";
import DiffAbled from "./DiffAbled";
import Student from "./Stundent";
import SchemesList from "./SchemesList";
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
  // customComponents: {
  //   // Replaces the default header
  //   header: () => (
  //     <div style={{ padding: "5px", borderRadius: "3px" }}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="200"
  //         height="60"
  //         viewBox="0 0 200 60"
  //         className="h-auto w-auto"
  //       >
  //         <text
  //           x="0"
  //           y="50"
  //           fontFamily="Arial, Helvetica, sans-serif"
  //           fontSize="30"
  //           fontWeight="bold"
  //           fill="black"
  //         >
  //           SchemesBot
  //         </text>
  //       </svg>
  //     </div>
  //   ),
  // Replaces the default bot avatar
  //  botAvatar: (props) => <MyAvatar {...props} />,
  //  // Replaces the default bot chat message container
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
  //  // Replaces the default user icon
  //  userAvatar: (props) => <MyCustomAvatar {...props} />,
  //  // Replaces the default user chat message
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  // },

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
    {
      widgetName: "SchemesList",
      widgetFunc: (props) => <SchemesList {...props} />,
      // mapStateToProps: ["category"],
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6E00FF",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customMessages: {
    info: (props) => <SchemesList {...props} />,
  },
};

export default config;
