import React from 'react';
import Chat from './Chat';
// import Profile from './Profile';

class Messenger extends React.Component {
  state = {
    username: '',
  };

  render() {
    return ( 
      <div>
        {/* <Profile /> */}
        <Chat />
      </div>
    );
  }
}

export default Messenger;
