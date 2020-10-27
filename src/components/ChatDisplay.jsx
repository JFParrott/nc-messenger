import React from 'react';
import socketIOClient from 'socket.io-client';

class ChatDisplay extends React.Component {
  state = {
    responses: [],
    endpoint: 'http://127.0.0.1:4001',
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('chat message', (message) =>
      this.setState((prevState) => {
        return {
          responses: [...prevState.responses, message],
        };
      })
    );
  }
  render() {
    const { responses } = this.state;
    return (
      <ul>
        {responses.map((msg) => {
          return <li>{msg}</li>;
        })}
      </ul>
    );
  }
}

export default ChatDisplay;
