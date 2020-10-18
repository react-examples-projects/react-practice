import React from "react";
import { lazy, Suspense } from "react";

//context
import GlobalState from "./Context";
import LoadingAlbum from "./Loading";
import AlbumProvider from "./Provider/AlbumProvider";
import ErrorAlbum from "./Errors Capture/ErrorAlbum";

const AlbumLazy = lazy(() => import("./Album"));

export default class TestComponent extends React.Component {
  static contextType = GlobalState;

  state = {
    albumCount: 0,
  };

  reference = React.createRef(null);

  onClickAlbumCount = () => {
    console.log(this.reference.current);

    this.setState({
      albumCount: this.state.albumCount + 1,
    });
  };

  render() {
    if (this.state.albumCount === 5) {
      throw new Error("Corrompido xddd");
    }
    return (
      <AlbumProvider>
        <GlobalState.Consumer>
          {(context) => {
            console.log(context);
            return (
              <>
                <b>{this.state.albumCount}</b>
                <br />
                <br />
                <button
                  onClick={this.onClickAlbumCount}
                  ref={this.reference}
                  className="btn"
                >
                  Increment albums count
                </button>
                <button
                  onClick={() =>
                    context.setCurrentUser({
                      name: "libardo",
                      role: "administrator",
                    })
                  }
                  className="btn"
                >
                  Change user
                </button>
                <br />
                <br />

                <strong style={{ marginBottom: "2rem", display: "block" }}>
                  Albums:
                </strong>

                <div className="test-component" onClick={this.onClickAlbum}>
                  {context.albums.map(({ title, thumbnailUrl, id }) => (
                    <Suspense fallback={<LoadingAlbum />} key={id}>
                      {/*este compnente solo se renderiza una vez en toda la app*/}
                      <ErrorAlbum>
                        <AlbumLazy
                          title={title}
                          thumbnailUrl={`https://picsum.photos/id/${id}/160/160`}
                          id={id}
                        />
                      </ErrorAlbum>
                    </Suspense>
                  ))}
                </div>
              </>
            );
          }}
        </GlobalState.Consumer>
      </AlbumProvider>
    );
  }
}
