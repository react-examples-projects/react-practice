import React, { memo } from "react";

function HomeButtons({ onToggleModal, onChangeUser, context }) {
  return (
    <div className="btn-group">
      <button onClick={() => onChangeUser(context)} className="btn btn-grad">
        Change user
      </button>
      <button className="btn" onClick={onToggleModal}>
        Toggle Modal
      </button>
    </div>
  );
}

export default memo(HomeButtons);
