import React from "react";
import Modal from "../../../Portals/Modal";
import { _form, _input } from "./Styles/homeModalForm.module.scss";

export default function ({ isOpenModal, onToggleModal }) {
  const form = () => {
    return (
      <form className={_form}>
        <input
          type="text"
          minLength="1"
          placeholder="Write your desc"
          required
          autoFocus
          aria-label="write your desc"
          className={`input ${_input}`}
        />
        <textarea className={`input ${_input}`} minLength="1" required />
      </form>
    );
  };
  return isOpenModal ? (
    <Modal
      title="Probando modal"
      description="Una descripcion muy pero muy corta..."
      onToggle={onToggleModal}
      render={form}
    />
  ) : null;
}
