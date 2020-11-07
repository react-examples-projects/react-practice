import React from "react";
import Home from "./HomeComponent";

export default class extends React.Component {
  state = {
    postsCount: 0,
    data: [],
    error: "",
    isLoading: true,
    isOpenModal: false,
  };

  api_url = "https://jsonplaceholder.typicode.com/photos";

  componentDidMount() {
    fetch(this.api_url)
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

  onClickPostCount = () => {
    this.setState({
      postsCount: this.state.postsCount + 1,
    });
  };

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
    if (this.state.postsCount === 5) {
      throw new Error("Corrompido xddd");
    }

    const { state, onToggleModal, onChangeUser, onClickPostCount } = this;

    return (
      <Home
        {...{
          ...state,
          onToggleModal,
          onChangeUser,
          onClickPostCount,
        }}
      />
    );
  }
}
