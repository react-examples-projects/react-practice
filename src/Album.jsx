import React, { useState, memo, useEffect } from "react";

// impresionante memo memoriza el componente con las mismas props
export default memo(function Album({
  title,
  thumbnailUrl,
  hocdata = "undefined ", // esto puede causar un error si no hay props
}) {
  const [error, setError] = useState(false);

  useEffect(() => {
    // obtenemos la prop adicional proveida por el HOC
    console.log(hocdata);
  }, [hocdata]);

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
