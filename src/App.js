import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      backgroundColor: '',
      appLogoHeight: '40vmin'
    };
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: this.state.backgroundColor}}>
          <img src={logo} className="App-logo" alt="logo" style={{height: this.state.appLogoHeight}} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <label for='backgroundColor'>Background Color</label>
          <input type='text' name='backgroundColor' onChange={(e) => this.handleChange(e)} value={this.state.backgroundColor}/>
          <label for='appLogoHeight'>Logo Height</label>
          <input type='text' name='appLogoHeight' onChange={(e) => this.handleChange(e)} value={this.state.appLogoHeight}/>
        </header>
      </div>
    );
  }
}

export default App;
