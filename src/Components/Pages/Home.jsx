import React from "react";
import Home from "./HomeComponent";
import api_url from "../../Helpers/api";
export default class extends React.Component {
  state = {
    data: [],
    error: "",
    isLoading: true,
    isOpenModal: false,
  };

  componentDidMount() {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error }));
  }

  componentWillUnmount() {}

  onChangeUser = (context) => {
    context.setCurrentUser({
      name: "libardo",
      role: "administrator",
    });
  };

  onToggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  onRender = () => {};

  render() {
    const { state, onToggleModal, onChangeUser } = this;

    return (
      <Home
        {...{
          ...state,
          onToggleModal,
          onChangeUser,
        }}
      />
    );
  }
}
