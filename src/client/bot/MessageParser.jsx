import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // console.log(typeof +message)
    
    let age = +message;
    if(age>0 && age<100)//TODO
    {
      actions.handleAge(age);
    }
    else
    {
      let botMessage="Please,enter a valid age!";
      actions.handleEvent(null,botMessage);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;