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
    ...this.props.cssContainer,
  };

  stylesTitle = {
    marginBottom: "1rem",
    color: "red",
    ...this.props.cssTitle,
  };

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
    this.setState(() => ({
      error: true,
      errorInfo,
    }));
  }

  render() {
    if (this.state.error) {
      return (
        <div style={this.stylesContainer}>
          <h4 style={this.stylesTitle}>{this.props.title}</h4>
          <p>{this.props.desc}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
