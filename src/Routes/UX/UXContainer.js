import React from "react";
import UXContainer from "./UXContainer";

export default class extends React.Component {
  state = {
    error: null,
    loading: false,
    show: false,
  };

  render() {
    return <UXContainer />;
  }
}
