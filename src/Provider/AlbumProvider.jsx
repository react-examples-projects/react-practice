import React, { useState, useEffect } from "react";
import GlobalState from "../Context";
import albumLists from "../db/data";


export default function (props) {
   // # La cantidad de nuevos items que se mostraran por cada click al boton
  let ITEMS_PER_CLICK = 12;

  const [currentUser, setCurrentUser] = useState(null);

  // # es el indice para extraer 0 a N elementos del arreglo
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_CLICK);

  // # arreglo de items que se muestrane n la UI
  const [albums, setAlbums] = useState(albumLists.slice(0, currentIndex));

  // # Los items que faltan por mostrar en la UI
  let availableItems = albumLists.length - ITEMS_PER_CLICK;

  const setAlbumListIndex = () => {

    // # si ya no es posible mostrar N elementos, mostramos solo los que quedan disponibles
    if (ITEMS_PER_CLICK > availableItems) {
      ITEMS_PER_CLICK = availableItems;
    }

    // # si aun se puede mostrar N elementos, lo hacemos
    if (availableItems > ITEMS_PER_CLICK) {
      availableItems -= ITEMS_PER_CLICK;
      setCurrentIndex(currentIndex + ITEMS_PER_CLICK);
    }
  }

  useEffect(() => {
   
    const newAlbumCount = albumLists.slice(0, currentIndex);
    setAlbums(newAlbumCount);

  }, [currentIndex])
 
  return (
    <GlobalState.Provider
      value={{
        albums,
        currentUser,
        setCurrentUser,
        setAlbumListIndex,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}
