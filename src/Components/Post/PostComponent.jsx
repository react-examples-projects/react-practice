import React, { forwardRef } from "react";

export default forwardRef(
  ({ thumbnailUrl, thumbailUrlLazy, title, showError }, ref) => {
    return (
      <article className="post" onClick={showError}>
        <figure className="thumbail">
          <img
            src={thumbailUrlLazy}
            alt="Album coverpage"
            ref={ref}
            data-loaded={thumbnailUrl}
          />
        </figure>
        <p>{title}</p>
      </article>
    );
  }
);
