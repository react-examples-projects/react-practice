import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Modal(props) {
	const { title, description, onToggle, ...propsModal } = props;

	return (
		<div 
		{...propsModal} 
		className="modal"
		>
			<h2 className="moda-title">
				{title}
			</h2>

			<p className="modal-body">
				{description}
			</p>

			<button className="btn" onClick={onToggle}>Close</button>
		</div>
	);
}


function AlbumPortal(props) {
	const { title, description, ...propsModal } = props;
	const modal = <Modal {...{ title, description }} {...propsModal}/>;

	return ReactDOM.createPortal(modal, document.getElementById("modals"));
}

AlbumPortal.propTypes = {
	title: PropTypes.string.isRequired,
	description : PropTypes.string.isRequired,
}


export default AlbumPortal;