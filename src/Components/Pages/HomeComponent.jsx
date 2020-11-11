import React, { useContext, memo } from "react";

// components
import Loader from "../Loaders/Loader";
import HomeButtons from "./Components/HomeButtons";
import BtnLoadMore from "./Components/ButtonLoadMore";
import Header from "../Layout/Header/Header";
import HomeModal from "./Components/HomeModal";
import LazyPost from "./Components/HomeLazyPost";
import homeContext from "../Context/context";

function Hc({ isOpenModal, onToggleModal, onChangeUser, isLoading, data }) {
  const context = useContext(homeContext);
  return (
    <>
      <HomeModal {...{ isOpenModal, onToggleModal }} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HomeButtons {...{ onToggleModal, onChangeUser, context }} />
          <div className="main">
            {context.items.map(({ title, id }) => (
              <LazyPost
                title={title}
                thumbnailUrl={`https://picsum.photos/id/${id}/160/160`}
                thumbailUrlLazy={`https://picsum.photos/id/${id}/5/5`}
                id={id}
                key={id}
              />
            ))}
          </div>
          <BtnLoadMore
            data={data}
            onclickButton={context.setItemsListIndex}
            currentIndex={context.currentIndex}
          />
        </>
      )}
    </>
  );
}

export default memo(Hc);
