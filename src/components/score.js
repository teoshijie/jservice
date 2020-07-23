import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


export class Score extends Component {
    constructor(props) {
      super(props);
      this.state = {
        score: 0
      }
    }
  
    increaseScore = () => {
      this.setState({score: this.state.score +1 })
    }
  
    
   decreaseScore = () => {
      this.setState({score: this.state.score - 1 })
    }
  
    resetScore = () => {
      this.setState({score: 0})
    }
  
  
    render() {
      return (
        <div>
          <h1>Score: {this.state.score}</h1>
          <Button onClick= {this.increaseScore}>+</Button> <Button onClick= {this.decreaseScore}>-</Button> <Button onClick= {this.resetScore}>Reset</Button>
        </div>)
    }
  }
  
  
export default Score
