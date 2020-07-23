import React, { Component } from 'react'
import Score from './score';
import DisplayAnswers from './displayanswers';
import DisplayQuestions from './displayquestions';

export class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
        baseURL: "https://jservice.io/api/random",
        question: null,
        showanswer: false,
      }
    }
  
    randomQuestion = () => {
      this.setState({}, async () => {
        try {
          const response = await fetch(this.state.baseURL);
          const result = await response.json();
          console.log(result)
          this.setState({ question: result })
  
        } catch (err) {
          console.log(err);
        }
      })
    }
  
    async componentDidMount() {
      this.randomQuestion();
    }
  
    toggleAnswer = () => {
      this.setState({ showanswer: !this.state.showanswer })
    }
  
    render() {
      console.log(this.state.question)
      return (
        <div>
  
  
          <div>
            <Score />
  
          </div>
  
          <div >
            <button onClick={this.randomQuestion}>Random Question</button>
            <div >
              {this.state.question === null ? '' :
                <React.Fragment>
                  <DisplayQuestions
                    questions={this.state.question[0].question}
                    category={this.state.question[0].category.title}
                  />
                  <div>
                    <h2 onClick={this.toggleAnswer}>
                      {this.state.showanswer === false ? 'Click to display answer' :
                        <DisplayAnswers
                          answer={this.state.question[0].answer}
                        />}
                    </h2>
  
                  </div>
  
                </React.Fragment>
              }
            </div>
          </div>
        </div>
  
  
      )
    }
  }
  
  
export default Content
