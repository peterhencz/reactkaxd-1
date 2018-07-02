import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class HomePage extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.history.push('/login');
    }, 3000);
  }

  render() {
    return (
      <div className="page page-home">
        <h1>
          Hello, {this.props.user.username}!
        </h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(
  mapStateToProps,
  {},
)(HomePage);
