import React, { Component } from 'react';
import { connect } from "react-redux";

import {incrementState} from "./actions/stateActions";

const mapStateToProps = store => {
  return {
    store: store.stateReducer.state
  };
};

class toConnectApp extends Component {
  headClick = () => {
    this.props.dispatch(incrementState());
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.headClick}>Hello World! The State is {this.props.store}</h1>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;
