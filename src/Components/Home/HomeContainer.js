import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    error: null,
    loading: false,
    show: false,
  };
  showCurriculum = () => {
    const { show } = this.state;
    if (show === false) {
      console.log(show);
      this.setState({ show: true });
    } else {
      console.log(show);
      this.setState({ show: false });
    }
  };
  render() {
    return (
      <HomePresenter
        error={this.error}
        loading={this.loading}
        showCurriculum={this.showCurriculum}
      />
    );
  }
}
