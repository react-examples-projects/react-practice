import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Portal(props) {
  const { title, description, onToggle, ...propsModal } = props;

  return (
    <>
      <div className="modal-overlay" />
      <div {...propsModal} className="modal">
        <h2 className="moda-title">{title}</h2>

        <p className="modal-body">{description}</p>

        {props.render && props.render(props)}
        <button className="btn" onClick={onToggle}>
          Close
        </button>
      </div>
    </>
  );
}

function Modal(props) {
  return ReactDOM.createPortal(
    <Portal {...props} />,
    document.getElementById("modals")
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Modal;
