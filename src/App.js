import React from 'react';
import socketIOClient from 'socket.io-client';

class App extends React.Component {
  state = {
    endpoint: 'http://127.0.0.1:4001',
    response: [],
    message: '',
    user: '',
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('chat message', (message) =>
      this.setState((prevState) => {
        return {
          response: [...prevState.response, message],
          // endpoint: 'http://127.0.0.1:4001',
        };
      })
    );
  }

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
    const { endpoint, message } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit('chat message', message);
  };

  render() {
    const { response, user } = this.state;
    return (
      <div>
        <ul>
          {response.map((msg) => {
            return (
              <li>
                {user}: {msg}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">
            User:
            <input
              id="user"
              type="text"
              onChange={this.handleUserChange}
            ></input>
          </label>
          <input type="text" onChange={this.handleChange}></input>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
