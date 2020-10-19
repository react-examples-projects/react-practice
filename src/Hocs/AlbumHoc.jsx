import React, { Component } from "react";

const AlbumHoc = (WrappedComponent, fn) => {
  return class extends Component {
    componentDidMount() {
      console.log("El Album " + this.props.id + " se monto");
      fn(this); // invocamos al callback pasado cuando se invoca al hoc
    }

    render() {
      return (
        <WrappedComponent
          // El hoc recibira las props que son para WrappedComponent
          {...this.props}
          // podemos pasar props adicionales (funciones y expresiones)
          hocdata={"Prop pasada de el hoc: " + this.props.id}
        />
      );
    }
  };
};

export default AlbumHoc;
