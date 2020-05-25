import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./login.css";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    const { email, password } = this.state;
    this.props.history.push("/etherscan");
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Sign In First Please</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <div className="button">
            <button className="buttonSignIn" type="submit">
              Sign in
            </button>
            <button
              className="google-sign-in"
              type="button"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
          </div>
        </form>
        <br />
        <p>teat user name: cy@example.com</p>
        <p>password: 123456</p>
      </div>
    );
  }
}

export default withRouter(Login);
