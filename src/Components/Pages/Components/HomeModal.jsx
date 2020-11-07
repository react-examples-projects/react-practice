import React from "react";
import Modal from "../../Portals/Modal";
export default function ({ isOpenModal, onToggleModal }) {
  return isOpenModal ? (
    <Modal
      title="Probando modal"
      description="Una descripcion muy pero muy corta..."
      onToggle={onToggleModal}
    />
  ) : null;
}
