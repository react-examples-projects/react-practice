import React, { useState, memo, useEffect } from "react";
import Post from "./PostComponent";
import LazLoadImages from "../../Helpers/LazyLoadImages.js";

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

  return <Post {...{ thumbailUrlLazy, thumbnailUrl, title, showError, ref }} />;
});
