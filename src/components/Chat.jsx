import React from 'react';
import ChatDisplay from './ChatDisplay';
import InputForm from './InputForm';

const Chat = (props) => {
  return (
    <div>
      <InputForm />
      <ChatDisplay />
    </div>
  );
};

export default Chat;
