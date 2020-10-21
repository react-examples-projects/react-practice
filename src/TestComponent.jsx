import React from "react";
import { lazy, Suspense } from "react";
 
//context
import GlobalState from "./Context";
import LoadingAlbum from "./Loading";
import AlbumProvider from "./Provider/AlbumProvider";
import ErrorAlbum from "./Errors Capture/ErrorAlbum";
import Loader from "./Loaders/Loader";

//HOC
import AlbumHoc from "./Hocs/AlbumHoc";

const AlbumLazy = lazy(() => import("./Album"));
const AlbumWrappedLazy = AlbumHoc(AlbumLazy, (_this) => {
  console.log(
    "%c\n⏩ Se activo el hoc en album: " + _this.props.id + "\n",
    "color: #14274e; font-weight: lighter; font-family: Courier New; font-size: 14px;"
  );
});

export default class TestComponent extends React.Component {

  state = {
    albumCount: 0,
    scrollYPage: 0,
    data : [],
    error : "",
    isLoading : true,
  };

  api_url = "https://jsonplaceholder.typicode.com/photos";
  reference = React.createRef(null);

  componentDidMount(){
    window.addEventListener("scroll", this.onScroll);
    fetch(this.api_url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
          isLoading : false,
        })
      })
      .catch(error => this.setState({error}))
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    this.setState({
        scrollYPage: window.scrollY
    });
  }

   
  onClickAlbumCount = () => {
    this.setState({
      albumCount: this.state.albumCount + 1,
    });
  };

  render() {

    if (this.state.albumCount === 5) {
      throw new Error("Corrompido xddd");
    }

    return (
      <AlbumProvider data={this.state.data}>
        <GlobalState.Consumer>
          {(context) => {
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

                {
                  this.state.isLoading ?
                    <Loader /> :
                    <div className="test-component" onClick={this.onClickAlbum}>
                  {context.albums.map(({ title, id }) => (
                    <Suspense fallback={<LoadingAlbum />} key={id}>
                      {/*este compnente solo se renderiza una vez en toda la app*/}
                      <ErrorAlbum>
                        <AlbumWrappedLazy
                          title={title}
                          thumbnailUrl={`https://picsum.photos/id/${id}/160/160`}
                          thumbailUrlLazy={`https://picsum.photos/id/${id}/5/5`}
                          id={id}
                        />
                      </ErrorAlbum>
                    </Suspense>
                  ))}
                </div>
                }
                

                <button className="btn" onClick={context.setAlbumListIndex}>
                	Load More
                </button>
              </>
            );
          }}
        </GlobalState.Consumer>
      </AlbumProvider>
    );
  }
}
