import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCourseById } from "../../../store/actions/Actions";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      courseName: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "200") {
      console.log("courseId", nextProps.course[0].name);
      console.log("status", nextProps.status);
      this.props.history.push("/course-page");
    } else {
      alert("error");
    }
  }

  getCourseId(courseId) {
    this.props.getCourseid(courseId);
  }

  render() {
    return (
      <div className="courses-card">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-content">
              {this.props.data.map((course, index) => (
                <div
                  className="course-name"
                  key={index}
                  onClick={() => this.getCourseId(course.courseId)}
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    status: state.courseData.status,
    course: state.courseData.course
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourseid: id => {
      dispatch(getCourseById(id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card)
);
