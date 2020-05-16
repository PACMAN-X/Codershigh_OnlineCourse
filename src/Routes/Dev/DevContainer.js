import React from 'react';
import DevPresenter from './DevPresenter';

export default class DevContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <DevPresenter />;
  }
}
