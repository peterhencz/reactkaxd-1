import React, { Component } from 'react';


class HomePage extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    setTimeout(() => {
      props.history.push('/login')
    }, 3000);
  }

  render() {
    return(
      <div className="page page-home">
        <h1>HomePage!!!</h1>
      </div>
    );
  }
}

export default HomePage;
