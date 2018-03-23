import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">与世界分享你的知识，经验和见解</h1>
            </header>
            <form action="">
                <input type="text" placeholder="手机号或邮箱"/>
                <input type="password" placeholder="密码"/>
            </form>
            <p>hello index</p>
      </div>
    );
  }
}

export default App;
