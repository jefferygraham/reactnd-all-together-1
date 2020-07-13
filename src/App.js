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
    showNumGames: true,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  checkUser = (evt) => {
    evt.preventDefault();
    let newUser = {
      first: this.state.first,
      last: this.state.last,
      user: this.state.user,
      gamesPlayed: 0,
    };
    const found = this.state.users.find((user) => user.user === newUser.user);
    if (!found) {
      this.addUser(newUser);
    } else {
      alert("Username already exists");
      this.setState(() => ({
        first: "",
        last: "",
        user: "",
      }));
    }
  };

  addUser = (user) => {
    this.setState(() => ({
      users: this.state.users.concat(user),
      first: "",
      last: "",
      user: "",
    }));
  };

  toggleState = () => {
    this.setState((st) => ({
      showNumGames: !st.showNumGames,
    }));
  };

  isEmpty = () => {
    return this.state.user === "";
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <form onSubmit={this.checkUser}>
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
          <button disabled={this.isEmpty()}>Add User</button>
        </form>
        <button onClick={this.toggleState}>
          {this.state.showNumGames
            ? "Hide the Number of Games Played"
            : "Show the Number of Games Played"}
        </button>
        <h2>Users</h2>
        <ol>
          {this.state.users.map((user) => (
            <li key={user.user}>
              {user.user} played{" "}
              {this.state.showNumGames ? user.gamesPlayed : "/*"} games
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
