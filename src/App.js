import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      raceName: '',
      raceDistance: '',
      raceDate: '',
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
    this.updateRaceName = this.updateRaceName.bind(this);
    this.updateRaceDistance = this.updateRaceDistance.bind(this);
    this.updateRaceDate = this.updateRaceDate.bind(this);
  }

  updateskierOneHours(event) {
    // console.log(`skieronehours: ${event.target.value}`)
    this.setState({
      skierOneHours: event.target.value
    });
  }

  updateskierOneMinutes(event) {
    // console.log(`skieroneminutes: ${event.target.value}`)
    this.setState({
      skierOneMinutes: event.target.value
    });
  }

  updateskierOneSeconds(event) {
    // console.log(`skieroneseconds: ${event.target.value}`)
    this.setState({
      skierOneSeconds: event.target.value
    });
  }
  updateyourHours(event){
    // console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierHours: event.target.value
    });
  }
  updateyourMinutes(event){
    // console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierMinutes: event.target.value
    });
  }
  updateyourSeconds(event){
    // console.log(`updateyourhours: ${event.target.value}`)
    this.setState({
      youSkierSeconds: event.target.value
    });
  }

  updateRaceDate(event){
    this.setState({
      raceDate: event.target.value
    })
  }

  updateRaceName(event){
    this.setState({
      raceName: event.target.value
    })
  }

  updateRaceDistance(event){
    this.setState({
      raceDistance: event.target.value
    })
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
    // console.log('First Place minutes ' + firstPlaceTime)
    let youTime = (parseFloat(yourHours * 60) + parseFloat(yourMinutes) + parseFloat(yourSeconds * 0.0166667));
    // console.log('Your minutes ' + youTime)
    let difference = (youTime - firstPlaceTime);
    // console.log('Difference ' + difference);
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
          <label>Enter the ski race information.</label><br></br>
          <label>Race Name: <input type="text" value={this.state.raceName} onChange={this.updateRaceName} /></label><br></br>
          <label>Race Distance: <input type="text" value={this.state.raceDistance} onChange={this.updateRaceDistance} /></label><br></br>
          <label>Race Date: <input type="text" value={this.state.raceDate} onChange={this.updateRaceDate} /></label><br></br>
          <br></br>
          <label>Enter the first place finisher's time below.</label><br></br>
          <label>Hours: <input type="text" pattern="[0-9]*" ref="skierOneHours" value={this.state.skierOneHours} onChange={this.updateskierOneHours} /></label><br></br>
          <label>Minutes: <input type="text" pattern="[0-9]*" value={this.state.skierOneMinutes} onChange={this.updateskierOneMinutes} /></label><br></br>
          <label>Seconds: <input type="text" pattern="[0-9]*" value={this.state.skierOneSeconds} onChange={this.updateskierOneSeconds} /></label><br></br>
          <br></br>
          <label>Enter your time below.</label><br></br>
          <label>Hours: <input type="text" pattern="[0-9]*" value={this.state.youSkierHours} onChange={this.updateyourHours} /></label><br></br>
          <label>Minutes: <input type="text" pattern="[0-9]*" value={this.state.youSkierMinutes} onChange={this.updateyourMinutes} /> </label><br></br>
          <label>Seconds: <input type="text" pattern="[0-9]*" value={this.state.youSkierSeconds} onChange={this.updateyourSeconds} /> </label><br></br>
          <input type="submit" value="Submit" />
        </form>
        <p>Results: </p>
        <p>Race Name: </p> {this.state.raceName}
        <p>Race Date: </p> {this.state.raceDate}
        <p>Race Distance: </p> {this.state.raceDistance}
        <p>Percent Back: </p> {this.state.percentBack}
      </div>
    );
  }
}

export default App;
