import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      skierOneHours: '',
      skierOneMinutes: '',
      skierOneSeconds: '',
      youSkierHours: '',
      youSkierMinutes: '',
      youSkierSeconds: ''
    }
    this.updateskierOneHours = this.updateskierOneHours.bind(this);
    this.updateskierOneMinutes = this.updateskierOneMinutes.bind(this);
    this.updateskierOneSeconds = this.updateskierOneSeconds.bind(this);
    this.updateyourHours = this.updateyourHours.bind(this);
    this.updateyourMinutes = this.updateyourMinutes.bind(this);
    this.updateyourSeconds = this.updateyourSeconds.bind(this);
  }

  updateskierOneHours(event) {
    console.log(`skieronehours: ${event.target.value}`)
    this.setState({
      hours: event.target.value
    });
  }

  updateskierOneMinutes(event) {
    console.log(`skieroneminutes: ${event.target.value}`)
    this.setState({
      minutes: event.target.value
    });
  }

  updateskierOneSeconds(event) {
    console.log(`skieroneseconds: ${event.target.value}`)
    this.setState({
      seconds: event.target.value
    });
  }
  updateyourHours(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      hours: event.target.value
    });
  }
  updateyourMinutes(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      minutes: event.target.value
    });
  }
  updateyourSeconds(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      seconds: event.target.value
    });
  }
  calcPercentBack(event){
    event.preventDefault();

  }



  render() {
    return (
      // <h1>Percent back calculator</h1>
      <form onSubmit={this.calcPercentBack}>
        <label> First Place Hours: <input type="text" pattern="[0-9]*" value={this.state.skierOneHours} onChange={this.calcPercentBack} /></label>
        <label>First Place Minutes: <input type="text" pattern="[0-9]*" value={this.state.skierOneMinutes} onChange={this.calcPercentBack} /></label>
        <label>First Place Seconds: <input type="text" pattern="[0-9]*" value={this.state.skierOneSeconds} onChange={this.calcPercentBack} /></label>
        <br></br>
        <label>Hours: <input type="text" pattern="[0-9]*" value={this.state.youSkierHours} onChange={this.calcPercentBack} /></label>
        <label>Minutes: <input type="text" pattern="[0-9]*" value={this.state.youSkierMinutes} onChange={this.calcPercentBack} /> </label>
        <label>Seconds: <input type="text" pattern="[0-9]*" value={this.state.youSkierSeconds} onChange={this.calcPercentBack} /> </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
