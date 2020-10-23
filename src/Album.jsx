import React, { useState, memo, useEffect } from "react";

import LazLoadImages from "./Helpers/LazyLoadImages.js";

// impresionante memo memoriza el componente con las mismas props
export default memo(function Album({
  title,
  thumbnailUrl,
  thumbailUrlLazy,
  hocdata = "undefined ", // esto puede causar un error si no hay props
}) {
  const [error, setError] = useState(false);
  const ref = React.createRef(null);

  useEffect(() => {
    // obtenemos la prop adicional proveida por el HOC
    console.log("%c" + hocdata, "color:#206a5d;");
  }, [hocdata]);

  useEffect(() => {
    LazLoadImages(ref.current);
  }, [ref]);


  const showError = () => {
    setError(true);
  };

  if (error) {
    throw new Error("Album error");
  }

  return (
    <article className="album" onClick={showError}>
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
});

