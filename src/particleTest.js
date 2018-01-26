import React from 'react';
import moment from 'moment';
import Particles from 'react-particles-js';

// https://github.com/VincentGarreau/particles.js/issues/114
// import particles from 'exports?particlesJS=window.particlesJS,window.pJSDom!particles.js';


const style = {
  example: {
    width: "40vw",
    height: "20vh",
    backgroundColor: "rgba(255,255,255,0.0)",
    borderRadius: "0px",
    border: "dotted 0.5px rgba(255,255,25,0.5)",
    margin: "80px"
  },
};

export default class Particle extends React.Component {
  constructor() {
    super();
    this.state = {
      day: moment().format('dddd'),
      time: moment().format('h:mm'),
      month: moment().format('MMM Do'),
      ampm: moment().format('a')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    // particles.particlesJS.load('particles-js', './particleOptions.json');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      day: moment().format('dddd'),
      time: moment().format('h:mm'),
      month: moment().format('MM/DD'),
      ampm: moment().format('A')
    });
  }

  render() {
    return (

      <div id='particles-js' className="particleContainer">
      <Particles className="particleBg"/>
        <h2 id="clock" className="particleData">
          {this.state.time}<span className='textUnit'>{this.state.ampm}</span>
        </h2>
      </div>
    );
  }



}
