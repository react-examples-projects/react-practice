import React from "react";

export default class extends React.Component {
  state = {
    error: null,
    errorInfo: "",
  };

  stylesContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  };

  stylesTitle = {
    marginBottom: "1rem",
    color: "red",
  };

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
    this.setState((state) => ({
      error: true,
      errorInfo,
    }));
  }

  render() {
    if (this.state.error) {
      return (
        <div style={this.stylesContainer}>
          <h5 style={this.stylesTitle}>Error al renderizar este album</h5>
          <p>
            <small>Ocurio un error al mostrar esta información</small>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
