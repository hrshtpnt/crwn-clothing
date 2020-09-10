import React, { Component } from "react";
import { firestore } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  printLogs = async () => {
    const test = await firestore.collection(
      "users/tUNsesHOtkO9cCVmo7zn/cartItem"
    );
    console.log(test);
  };
  componentDidMount() {
    this.printLogs();
  }
  render() {
    return <div>Sign up component</div>;
  }
}

export default SignUp;
