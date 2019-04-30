import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./SignUp.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      //This rule is for confirm password
      validators: {
        cp: {
          // name the rule
          message: "The :attribute does not match.",
          rule: (val, params, validator) => {
            return Boolean(val) ? val === params[0] : null;
          },
          required: true // optional
        }
      }
    });
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
      message: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.postData = this.postData.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  postData(event) {
    // debugger;
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    this.setState({
      loading: true
    });
    const data = {
      name,
      email,
      password
    };
    fetch("http://localhost:8000/user/register", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      return res.json();
    }).then(json => {
      console.log('res json', json);
    });

    
    // axios
    //   .post("localhost:8000/user/register", data)
    //   .then(Response => {
    //     console.log(Response);
    //     this.setState({
    //       loading: false,
    //       message: Response.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({
    //       loading: false
    //     });
    //   });
  }
  submitForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="signup-container">
          <div className="inner-container">
            <h1 className="heading" align="center">
              Sign Up
            </h1>
            <form onSubmit={this.submitForm}>
              <div>
                <label className="labels vertical-spacing"> Your name </label>
                <br />
                <input
                  className="field"
                  name="name"
                  type="text"
                  onChange={this.handleUserInput}
                />
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Email <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="email"
                  type="email"
                  onChange={this.handleUserInput}
                />
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="password"
                  type="password"
                  onChange={this.handleUserInput}
                />
                {this.validator.message(
                  "password",
                  this.state.password,
                  "required|min:6|max:20"
                )}
              </div>
              <div>
                <label className="labels vertical-spacing">
                  Confirm Password <span className="required-indicator">*</span>
                </label>
                <br />
                <input
                  className="field"
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleUserInput}
                />
                {this.validator.message(
                  "confirmPassword",
                  this.state.confirmPassword,
                  "requried|cp:" + this.state.password
                )}
              </div>
              <div className="term-conditions">
                By clicking 'Create account', you agree to our Terms and
                Conditions and acknowledge that you have read our Privacy Policy
                and Disclosure Guidelines.
              </div>
              <div>
                <button
                  className="button"
                  name="signUpBtn"
                  type="submit"
                  onClick={this.postData}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
