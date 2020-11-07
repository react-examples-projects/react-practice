import React, { memo } from "react";

function HomeButtons({ postsCount, onClickPostCount, onChangeUser, context }) {
  return (
    <>
      <b>{postsCount}</b>
      <button onClick={onClickPostCount} className="btn">
        Increment items count
      </button>
      <button onClick={() => onChangeUser(context)} className="btn">
        Change user
      </button>
    </>
  );
}

export default memo(HomeButtons);
