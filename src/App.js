import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    first: "",
    last: "",
    user: "",
    users: [],
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  addUser = (evt) => {
    evt.preventDefault();
    let newUSer = {
      firstName: this.state.first,
      lastName: this.state.last,
      userName: this.state.user,
      gamesPlayed: 0,
    };
    this.setState(() => ({
      users: this.state.users.concat(newUSer),
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            placeholder="Enter First Name"
            value={this.state.first}
            name="first"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            value={this.state.last}
            name="last"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter username"
            value={this.state.user}
            name="user"
            onChange={this.handleChange}
          />
          <button>Add User</button>
        </form>
        <button>Show Games Played</button>
        <h2>Users</h2>
        <ol>
          {this.state.users.map((user) => (
            <li>
              {user.userName} played {user.gamesPlayed} games
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
