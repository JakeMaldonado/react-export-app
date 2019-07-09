import React, { Component } from 'react';
import Exports from './Exports';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Exports scrapes={this.props.sampleScrapes} />
      </div>
    );
  }
}
