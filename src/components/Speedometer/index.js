// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SpeedoMeter Img"
          className="image"
        />
        <h1 className="count">Speed is {speed}mph</h1>
        <p className="limits">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-con">
          <button
            className="button speed-btn"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="button break-btn"
            type="button"
            onClick={this.onBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
