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
    width: "100vw",
    height: "100vh",
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
    console.log(errorInfo)
    this.setState((state) => ({
      error: true,
      errorInfo,
    }));
  }

  render() {
    if (this.state.error) {
      return (
        <div style={this.stylesContainer}>
          <h4 style={this.stylesTitle}>Ocurrió un error en la aplicación</h4>
          <p>En el componente {this.props.componentName}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
