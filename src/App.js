import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    user: [
      {username: 'Connor'},
      {username: 'Katie'},
      {username: 'Jacky'}
    ]
  }

  usernameHandler = (event) => {
    this.setState({ user: [
      {username: event.target.value},
      {username: event.target.value},
      {username: event.target.value}
    ]})
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.user[0].username}>
          <UserInput username={this.state.user[0].username} changed={this.usernameHandler}/>
        </UserOutput>
        <UserOutput username={this.state.user[1].username}>
          <UserInput username={this.state.user[1].username} changed={this.usernameHandler}/>
        </UserOutput>
        <UserOutput username={this.state.user[2].username}>
          <UserInput username={this.state.user[2].username} changed={this.usernameHandler}/>
        </UserOutput>
      </div>
    );
  }
}

export default App;
