import React from "react";
import Home from "./HomeComponent";

export default class extends React.Component {
  state = {
    albumCount: 0,
    data: [],
    error: "",
    isLoading: true,
    isOpenModal: false,
  };

  api_url = "https://jsonplaceholder.typicode.com/photos";
  reference = React.createRef(null);
 
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

  onClickAlbumCount = () => {
    this.setState({
      albumCount: this.state.albumCount + 1,
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
    console.log("Test Component render");
    if (this.state.albumCount === 5) {
      throw new Error("Corrompido xddd");
    }
    const {
      state,
      reference,
      onToggleModal,
      onChangeUser,
      onClickAlbumCount,
    } = this;

    return (
      <Home
        {...{
          ...state,
          reference,
          onToggleModal,
          onChangeUser,
          onClickAlbumCount,
        }}
      />
    );
  }
}
