import React, { memo } from "react";

function Header() {
  console.log("Header");
  return (
    <header className="header">
      <h1>Test application posts</h1>
    </header>
  );
}

export default memo(Header);
