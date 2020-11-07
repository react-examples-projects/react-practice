import React, { lazy, Suspense } from "react";

// components
import context from "../Context/context";
import LoadingPost from "../Loaders/Loading";
import ShowMoreProvider from "../Provider/ShowMoreProvider";
import ErrorPost from "../ErrorBoundaries/ErrorPost";
import Loader from "../Loaders/Loader";
import PostHOC from "../Hocs/PostHOC";
import HomeButtons from "./Components/HomeButtons";
import BtnLoadMore from "./Components/ButtonLoadMore";
import HomeModal from "./Components/HomeModal";

const PostLazy = lazy(() => import("../Post/PostContainer"));

const PostWrapped = PostHOC(PostLazy, (_this) => {
  console.log(
    "%c\n⏩ Se activo el hoc en album: " + _this.props.id + "\n",
    "color: #14274e; font-weight: lighter; font-family: Courier New; font-size: 14px;"
  );
});

export default function ({
  isOpenModal,
  onToggleModal,
  data,
  postsCount,
  onClickPostCount,
  onClickAlbum,
  onChangeUser,
  isLoading,
}) {
  return (
    <>
      <HomeModal {...{ isOpenModal, onToggleModal }} />
      <button className="btn" onClick={onToggleModal}>
        Toggle Modal
      </button>
      <br />

      <ShowMoreProvider data={data}>
        <context.Consumer>
          {(context) => {
            return (
              <>
                <HomeButtons
                  {...{ postsCount, onClickPostCount, onChangeUser, context }}
                />
                <strong style={{ marginBottom: "2rem", display: "block" }}>
                  Items:
                </strong>

                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="test-component" onClick={onClickAlbum}>
                      {context.items.map(({ title, id }) => (
                        <Suspense fallback={<LoadingPost />} key={id}>
                          <ErrorPost>
                            <PostWrapped
                              title={title}
                              thumbnailUrl={`https://picsum.photos/id/${id}/160/160`}
                              thumbailUrlLazy={`https://picsum.photos/id/${id}/5/5`}
                              id={id}
                            />
                          </ErrorPost>
                        </Suspense>
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
