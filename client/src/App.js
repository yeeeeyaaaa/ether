import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('http://localhost:8081/api/user', { mode: 'cors' })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (

      <div className="App">
        <header className="app-header">
          <img src={logo} alt="logo" className="App-logo" />
          <h1 className="app-title">Proves Yeya</h1>
          <div className="app-right">
            {/* <AuthButton /> */}
          </div>
        </header>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
