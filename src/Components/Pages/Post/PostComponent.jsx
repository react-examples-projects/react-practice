import React from "react";
import Loader from "../../Loaders/Loader";
import { postTitle, postFigure, ph } from "./Styles/posts.module.scss";

export default function ({ title, body, isLoading, isError, id }) {
  return (
    <div className="App">
      {isError ? (
        <h4>Ocurrio un error</h4>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="header">
            <h1 className={postTitle}>{title}</h1>
          </header>
          <figure className={`img ${postFigure}`}>
            <img
              src={`https://picsum.photos/id/${id}/700/300`}
              className="img"
              alt={title}
            />
          </figure>
          <p className={ph}>
            {body}
            {body}
            {body}
            {body}
          </p>
          <p className={ph}>
            {body}
            {body}
            {body}
            {body}
          </p>
          <p className={ph}>
            {body}
            {body}
            {body}
            {body}
          </p>
        </>
      )}
    </div>
  );
}
