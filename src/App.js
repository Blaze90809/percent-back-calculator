import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      percentBack: '',
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
    this.calcPercentBack = this.calcPercentBack.bind(this);
  }

  updateskierOneHours(event) {
    console.log(`skieronehours: ${event.target.value}`)
    this.setState({
      skierOneHours: event.target.value
    });
  }

  updateskierOneMinutes(event) {
    console.log(`skieroneminutes: ${event.target.value}`)
    this.setState({
      skierOneMinutes: event.target.value
    });
  }

  updateskierOneSeconds(event) {
    console.log(`skieroneseconds: ${event.target.value}`)
    this.setState({
      skierOneSeconds: event.target.value
    });
  }
  updateyourHours(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierHours: event.target.value
    });
  }
  updateyourMinutes(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierMinutes: event.target.value
    });
  }
  updateyourSeconds(event){
    console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierSeconds: event.target.value
    });
  }
  calcPercentBack(event) {
    event.preventDefault();
    let firstPlaceSkierHours = this.state.skierOneHours;
    let firstPlaceSkierMinutes = this.state.skierOneMinutes;
    let firstPlaceSkierSeconds = this.state.skierOneSeconds;
    let yourHours = this.state.youSkierHours;
    let yourMinutes = this.state.youSkierMinutes;
    let yourSeconds = this.state.youSkierSeconds;
    let firstPlaceTime = (parseFloat(firstPlaceSkierHours * 60) + parseFloat(firstPlaceSkierMinutes) + parseFloat(firstPlaceSkierSeconds * 0.0166667));
    console.log('First Place minutes ' + firstPlaceTime)
    let youTime = (parseFloat(yourHours * 60) + parseFloat(yourMinutes) + parseFloat(yourSeconds * 0.0166667));
    console.log('Your minutes ' + youTime)
    let difference = (youTime - firstPlaceTime);
    console.log('Difference ' + difference);
    let calcPercentBack = ((difference/firstPlaceTime) * 100);
    
    this.setState({
      percentBack: calcPercentBack
    });
    }
    

  



  render() {
    return (
      <div className="App">
        <h1>Percent back calculator</h1>
        <h3>Feel the burn</h3>
        <form onSubmit={this.calcPercentBack}>
          <label>First Place Hours: <input type="text" pattern="[0-9]*" ref="skierOneHours" value={this.state.skierOneHours} onChange={this.updateskierOneHours} /></label><br></br>{this.state.skierOneHours}
          <label>First Place Minutes: <input type="text" pattern="[0-9]*" value={this.state.skierOneMinutes} onChange={this.updateskierOneMinutes} /></label><br></br>{this.state.skierOneMinutes}
          <label>First Place Seconds: <input type="text" pattern="[0-9]*" value={this.state.skierOneSeconds} onChange={this.updateskierOneSeconds} /></label><br></br>{this.state.skierOneSeconds}
          <br></br>
          <label>Your Hours: <input type="text" pattern="[0-9]*" value={this.state.youSkierHours} onChange={this.updateyourHours} /></label><br></br>{this.state.youSkierHours}
          <label>Your Minutes: <input type="text" pattern="[0-9]*" value={this.state.youSkierMinutes} onChange={this.updateyourMinutes} /> </label><br></br>{this.state.youSkierMinutes}
          <label>Your Seconds: <input type="text" pattern="[0-9]*" value={this.state.youSkierSeconds} onChange={this.updateyourSeconds} /> </label><br></br>{this.state.youSkierSeconds}
          <input type="submit" value="Submit" />
        </form>
        <p>Your percent back: </p>{this.state.percentBack}
      </div>
    );
  }
}

export default App;
