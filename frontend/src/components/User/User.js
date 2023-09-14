import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      city: "",
      email: "",
      phone: "",
    };
  }

  handleOnChange = ev => {
    const { target: { value, name } } = ev;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = ev => {
    ev.preventDefault();
    const { username, city, email, phone } = this.state;
    const data = {
      username,
      city,
      email,
      phone,
    };

    console.log("User data", data);
  }

  render() {
    return (
      <div className="User">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <p>username</p>
            <p>
              <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} />
            </p>
          </div>
          <div>
            <p>city</p>
            <p>
              <input type="text" name="city" onChange={this.handleOnChange} value={this.state.city} />
            </p>
          </div>
          <div>
            <p>email</p>
            <p>
              <input type="text" name="email" onChange={this.handleOnChange} value={this.state.email} />
            </p>
          </div>
          <div>
            <p>phone</p>
            <p>
              <input type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} />
            </p>
          </div>
          <p><button>Create</button></p>
        </form>
      </div>
    );
  }
}