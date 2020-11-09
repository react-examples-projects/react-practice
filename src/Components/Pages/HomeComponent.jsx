import React from "react";

// components
import context from "../Context/context";
import ShowMoreProvider from "../Provider/ShowMoreProvider";
import Loader from "../Loaders/Loader";
import HomeButtons from "./Components/HomeButtons";
import BtnLoadMore from "./Components/ButtonLoadMore";
import Header from "../Layout/Header/Header";
import HomeModal from "./Components/HomeModal";
import LazyPost from "./Components/HomeLazyPost";

export default function ({
  isOpenModal,
  onToggleModal,
  data,
  onClickAlbum,
  onChangeUser,
  isLoading,
}) {
  return (
    <>
      <HomeModal {...{ isOpenModal, onToggleModal }} />

      <ShowMoreProvider data={data}>
        <context.Consumer>
          {(context) => {
            return (
              <>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <Header />
                    <HomeButtons
                      {...{ onToggleModal, onChangeUser, context }}
                    />
                    <div className="main" onClick={onClickAlbum}>
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
          }}
        </context.Consumer>
      </ShowMoreProvider>
    </>
  );
}
