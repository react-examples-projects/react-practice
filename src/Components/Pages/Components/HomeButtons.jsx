import React from "react";

export default function ({
  postsCount,
  onClickPostCount,
  onChangeUser,
  context,
}) {
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
