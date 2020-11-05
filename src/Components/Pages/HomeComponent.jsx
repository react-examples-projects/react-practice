import React, { lazy, Suspense } from "react";

// components
import context from "../Context/context";
import LoadingAlbum from "../Loaders/Loading";
import AlbumProvider from "../Provider/AlbumProvider";
import ErrorAlbum from "../ErrorBoundaries/ErrorAlbum";
import Loader from "../Loaders/Loader";
import AlbumPortal from "../Portals/AlbumPortal";
import AlbumHoc from "../Hocs/AlbumHoc";

const PostLazy = lazy(() => import("../Post/PostContainer"));

const PostWrapped = AlbumHoc(PostLazy, (_this) => {
  console.log(
    "%c\n⏩ Se activo el hoc en album: " + _this.props.id + "\n",
    "color: #14274e; font-weight: lighter; font-family: Courier New; font-size: 14px;"
  );
});

export default function ({
  isOpenModal,
  onToggleModal,
  data,
  albumCount,
  onClickAlbumCount,
  onClickAlbum,
  reference,
  onChangeUser,
  isLoading,
}) {
  return (
    <>
      {isOpenModal && (
        <AlbumPortal
          title="Probando modal"
          description="Una descripcion muy pero muy corta..."
          onToggle={onToggleModal}
        />
      )}

      <button className="btn" onClick={onToggleModal}>
        Toggle Modal
      </button>
      <br />

      <AlbumProvider data={data}>
        <context.Consumer>
          {(context) => {
            return (
              <>
                <b>{albumCount}</b>
                <br />
                <br />
                <button
                  onClick={onClickAlbumCount}
                  ref={reference}
                  className="btn"
                >
                  Increment albums count
                </button>
                <button onClick={() => onChangeUser(context)} className="btn">
                  Change user
                </button>

                <br />
                <br />

                <strong style={{ marginBottom: "2rem", display: "block" }}>
                  Albums:
                </strong>

                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="test-component" onClick={onClickAlbum}>
                      {context.albums.map(({ title, id }) => (
                        <Suspense fallback={<LoadingAlbum />} key={id}>
                          {/*este compnente solo se renderiza una vez en toda la app*/}
                          <ErrorAlbum>
                            <PostWrapped
                              title={title}
                              thumbnailUrl={`https://picsum.photos/id/${id}/160/160`}
                              thumbailUrlLazy={`https://picsum.photos/id/${id}/5/5`}
                              id={id}
                            />
                          </ErrorAlbum>
                        </Suspense>
                      ))}
                    </div>
                    <button className="btn" onClick={context.setAlbumListIndex}>
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
      </AlbumProvider>
    </>
  );
}
