import React from "react";
import DevPresenter from "./DevPresenter";

export default class extends React.Component {
  state = {
    error: null,
    loading: false,
    show: false,
  };

  render() {
    return <DevPresenter />;
  }
}
