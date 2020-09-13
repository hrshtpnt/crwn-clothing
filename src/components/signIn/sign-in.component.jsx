import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();

    if (email !== "" && password !== "") {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
          email: "",
          password: "",
        });
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
      }
    } else {
      alert("Please enter the email and password!!");
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>Already have an account ?</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              isSignInWithGoogle
              onClick={signInWithGoogle}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
