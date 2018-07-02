import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from 'actions/actions';
import './loginpage.scss';


class LoginPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    console.log(this.state); // eslint-disable-line
    this.props.login(this.state.username, this.state.password);
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div className="page page-login">
        <h1>
          LOGIN
        </h1>
        <div className="inputs">
          <input type="text" onChange={this.handleInputChange} name="username" />
          <input type="password" onChange={this.handleInputChange} name="password" />
        </div>
        <button type="button" onClick={this.handleClick}>
          <span>
          🐈
          </span>
        </button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

const mapDispachToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(LoginPage);
