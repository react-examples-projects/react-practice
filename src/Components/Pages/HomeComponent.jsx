import React, { lazy, Suspense } from "react";

// components
import context from "../Context/context";
import LoadingPost from "../Loaders/Loading";
import ShowMoreProvider from "../Provider/ShowMoreProvider";
import ErrorPost from "../ErrorBoundaries/ErrorPost";
import Loader from "../Loaders/Loader";
import Modal from "../Portals/Modal";
import PostHOC from "../Hocs/PostHOC";

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
  reference,
  onChangeUser,
  isLoading,
}) {
  return (
    <>
      {isOpenModal && (
        <Modal
          title="Probando modal"
          description="Una descripcion muy pero muy corta..."
          onToggle={onToggleModal}
        />
      )}

      <button className="btn" onClick={onToggleModal}>
        Toggle Modal
      </button>
      <br />

      <ShowMoreProvider data={data}>
        <context.Consumer>
          {(context) => {
            return (
              <>
                <b>{postsCount}</b>
                <br />
                <br />
                <button
                  onClick={onClickPostCount}
                  ref={reference}
                  className="btn"
                >
                  Increment items count
                </button>
                <button onClick={() => onChangeUser(context)} className="btn">
                  Change user
                </button>

                <br />
                <br />

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
                    <button className="btn" onClick={context.setItemsListIndex}>
                      Load More
                      <span
                        style={{
                          display: "inline-block",
                          marginLeft: "5px",
                        }}
                      >
                        {context.currentIndex}/{data.length}
                      </span>
                    </button>
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
