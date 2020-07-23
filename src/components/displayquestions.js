import React, { Component } from 'react'

export class DisplayQuestions extends Component {
    render() {
      return (
        <div>
          <h2>Category: {(this.props.category).toUpperCase()}</h2>
          <h3>Question: {this.props.questions}</h3>
  
        </div>
      )
    }
  }
  

export default DisplayQuestions
