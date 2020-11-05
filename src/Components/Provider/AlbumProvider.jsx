import React, { useState, useEffect } from "react";
import GlobalState from "../Context/context";

export default function (props) {
  // # La cantidad de nuevos items que se mostraran por cada click al boton
  let ITEMS_PER_CLICK = 12;

  const [currentUser, setCurrentUser] = useState(null);

  // # es el indice para extraer 0 a N elementos del arreglo
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_CLICK);

  // # arreglo de items que se muestrane n la UI
  const [albums, setAlbums] = useState(props.data);

  // # Los items que faltan por mostrar en la UI
  let availableItems = props.data.length - ITEMS_PER_CLICK;

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
  };

  useEffect(() => {
    // # si el indice cambia, añadimos mas items a la lista
    setAlbums((previusAlbums) => {
      return props.data.slice(0, currentIndex);
    });
  }, [props.data, currentIndex]);

  useEffect(() => {
    setAlbums(props.data.slice(0, ITEMS_PER_CLICK));
  }, [props.data, ITEMS_PER_CLICK]);

  return (
    <GlobalState.Provider
      value={{
        albums,
        currentUser,
        setCurrentUser,
        setAlbumListIndex,
        currentIndex,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}
