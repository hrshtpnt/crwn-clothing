import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          password: "",
          confirmPassword: "",
          email: "",
        });
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      }
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with a new email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="User Name"
            name="displayName"
            type="text"
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="email"
            label="Email"
            type="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="confirmPassword"
            label="Password"
            type="password"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
