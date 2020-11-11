import React, { lazy, Suspense } from "react";
import LoadingPost from "../../../Loaders/Loading";
import ErrorPost from "../../../ErrorBoundaries/ErrorPost";
import PostHOC from "../../../Hocs/PostHOC";

const PostLazy = lazy(() => import("../../../Post/PostContainer"));
const PostWrapped = PostHOC(PostLazy, (_this) => {
  console.log(
    "%c\n⏩ Se activo el hoc en album: " + _this.props.id + "\n",
    "color: #14274e; font-weight: lighter; font-family: Courier New; font-size: 14px;"
  );
});

export default function ({ title, thumbnailUrl, thumbailUrlLazy, id }) {
  return (
    <Suspense fallback={<LoadingPost />}>
      <ErrorPost>
        <PostWrapped
          {...{
            id,
            title,
            thumbnailUrl,
            thumbailUrlLazy,
          }}
        />
      </ErrorPost>
    </Suspense>
  );
}
