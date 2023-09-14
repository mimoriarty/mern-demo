import React, { Component } from "react";
import User from "./User/User"
import Header from "../shared/Header";
import Content from "../shared/Content";
import Footer from "../shared/Footer";
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Header title="Create User"/>
        <h1>HRED-Tracker</h1>
        <Content>
          <User/>
        </Content>
        <Footer/>
      </div>
    );
  }
}