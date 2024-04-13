import './App.css';
import React from 'react';
import axios from 'axios';

//import {useState} from "react";
//import {axious} from axious

class App extends React.Component{
  state = {advice : '' };
  
  
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice').then((response) =>{
      const {advice} =response.data.slip;
      this.setState({advice});
      //console.log(advice)
    })
    .catch((error) =>{
      console.log(error)
    });
  }
  render(){
    const {advice} = this.state;
    return(
      <div className="app">
        <div className="card">
      <h1>hi,</h1>
      <h1 className="heading">{advice}</h1>
      <button className="button" onClick={this.fetchAdvice}>
        <span>Gimme Advice</span>
      </button>
      </div>
      
    </div>
 ) }
  
  
}

export default App;