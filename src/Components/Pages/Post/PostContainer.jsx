import React from "react";
import PostComponent from "./PostComponent";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPost, config } from "../../../Helpers/api";

export default function () {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery(
    ["post", id],
    fetchPost,
    config
  );
  return <PostComponent {...{ ...data, isError, isLoading, error, id }} />;
}
