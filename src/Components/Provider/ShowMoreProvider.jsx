import React, { useState, useEffect, useCallback } from "react";
import context from "../Context/context";

export default function (props) {
  // # La cantidad de nuevos items que se mostraran por cada click al boton
  let ITEMS_PER_CLICK = 12;

  const getItemsRange = useCallback(
    (range = 0, max = ITEMS_PER_CLICK) => {
      return props.data.slice(range, max);
    },
    [ITEMS_PER_CLICK, props.data]
  );

  const [currentUser, setCurrentUser] = useState(null);

  // # es el indice para extraer 0 a N elementos del arreglo
  const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_CLICK);

  // # arreglo de items que se muestran en la UI (0-12)
  const [items, setItems] = useState(getItemsRange());

  // # Los items que faltan por mostrar en la UI
  let availableItems = props.data.length - ITEMS_PER_CLICK;

  const setItemsListIndex = () => {
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
    setItems(() => {
      return getItemsRange(0, currentIndex);
    });
  }, [props.data, currentIndex, getItemsRange]);

  useEffect(() => {
    setItems(getItemsRange());
  }, [props.data, ITEMS_PER_CLICK, getItemsRange]);

  return (
    <context.Provider
      value={{
        items,
        currentUser,
        setCurrentUser,
        setItemsListIndex,
        currentIndex,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
