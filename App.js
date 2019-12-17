import React, { useState, Component } from 'react';
import Person from './components/person'
import './App.css'
class App extends Component {
  render(){
    return(<div>
      <section className="card">
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
      <div className="card--content"></div>
    </section></div>
    )
  }
}

body {
  background-color: lightgreen;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  background-color: #fff;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto;}

 .card::-webkit-scrollbar{
   display: none;
}

.card--content {
  background-color: #e74c3c;
  min-width: 200px;
  margin: 5px;
}

  

export default App
