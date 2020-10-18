import React, { useState, memo } from "react";

// impresionante memo memoriza el componente con las mismas props
export default memo(function Album({ title, thumbnailUrl, id }) {
  const [error, setError] = useState(false);

  const showError = () => {
    setError(true);
  };

  if (error) {
    throw new Error("Album error");
  }

  return (
    <article className="album" onClick={showError}>
      <figure className="thumbail">
        <img src={thumbnailUrl} alt="Album coverpage" />
      </figure>
      <p>{title}</p>
    </article>
  );
});
