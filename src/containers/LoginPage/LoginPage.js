import React, { Component } from 'react';


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/');
  }

  render() {
    return(
      <div className="page page-login">
        <h1>Login</h1>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default LoginPage;
