import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
export default forwardRef(
  ({ id, thumbnailUrl, thumbailUrlLazy, title }, ref) => {
    return (
      <Link to={`post/${id}`} className="post">
        <figure className="thumbail">
          <img
            src={thumbailUrlLazy}
            alt="Album coverpage"
            ref={ref}
            data-loaded={thumbnailUrl}
          />
        </figure>
        <p>{title}</p>
      </Link>
    );
  }
);
