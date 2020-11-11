import React, { memo } from "react";
import Btn from "../../Buttons/Btn";

function HomeButtons({ onToggleModal, onChangeUser, context }) {
  return (
    <div className="btn-group">
      <Btn
        text="Change user"
        onClick={() => onChangeUser(context)}
        className="btn-grad"
      />
      <Btn text="Toggle Modal" onClick={onToggleModal} />
    </div>
  );
}

export default memo(HomeButtons);
