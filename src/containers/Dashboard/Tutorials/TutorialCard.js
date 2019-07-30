import React, { Component } from "react";
import LinesEllipsis from 'react-lines-ellipsis'
import "./Tutorial.scss";

class TutorialCard extends Component {
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
          <div className="truncate-lines">
          <LinesEllipsis
            text={this.props.description}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          </div>
          <div className="tutorial-link">
            <a href={this.props.href} className="font-weight-bold">
              View Tutorial
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default TutorialCard;
