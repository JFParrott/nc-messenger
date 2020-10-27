import React from 'react';
import socketIOClient from 'socket.io-client';

class InputForm extends React.Component {
  state = {
    message: '',
		user: '',
    endpoint: 'http://127.0.0.1:4001',
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  handleUserChange = (e) => {
    const { value } = e.target;
    this.setState({ user: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { endpoint, message, user } = this.state;
		const socket = socketIOClient(endpoint);
		const userAndMessage = [`${user}:`, message]
    socket.emit('chat message', userAndMessage);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">
          User:
          <input id="user" type="text" onChange={this.handleUserChange}></input>
        </label>
        <input type="text" onChange={this.handleChange}></input>
        <button>Send</button>
      </form>
    );
  }
}

export default InputForm;
