import React, { Component } from "react";
import LinesEllipsis from 'react-lines-ellipsis'
import "./Quiz.scss";

class QuizCard extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.title}
            INTERVIEW PREPARATION
          </h5>
          <h2 className="card-heading font-weight-bold">
            {this.props.heading}
          </h2>
          <LinesEllipsis
            text='challenges based on learnings from 1000+ companies to help you prepare'
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          {/* <p className="truncate-overflow">"challenges based on learnings from 1000+ companies to help you prepare"</p> */}
          <div className="quiz-link">
            <a href={this.props.href} className="font-weight-bold">
              View Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard;
