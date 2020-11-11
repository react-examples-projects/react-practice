import React, { memo, useEffect } from "react";
import Post from "./PostComponent";
import LazLoadImages from "../../Helpers/LazyLoadImages.js";

export default memo(function ({
  id,
  title,
  thumbnailUrl,
  thumbailUrlLazy,
  hocdata = "undefined ", // esto puede causar un error si no hay props
}) {
  const ref = React.createRef(null);

  useEffect(() => {
    // obtenemos la prop adicional proveida por el HOC
    console.log("%c" + hocdata, "color:#206a5d;");
  }, [hocdata]);

  useEffect(() => {
    LazLoadImages(ref.current);
  }, [ref]);

  return <Post {...{ id, thumbailUrlLazy, thumbnailUrl, title, ref }} />;
});
