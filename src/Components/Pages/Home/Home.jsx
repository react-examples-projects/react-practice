import React, { useState, memo } from "react";
import Home from "./HomeComponent";
import ShowMoreProvider from "../../Provider/ShowMoreProvider";
import fetchPosts, { config } from "../../../Helpers/api";
import { useQuery } from "react-query";

const HomeContainer = memo(({ data, isLoading, error }) => {
  console.log("HomeContianer.jsx");
  const [isOpenModal, setOpenModal] = useState(false);

  const onChangeUser = (context) => {
    context.setCurrentUser({
      name: "libardo",
      role: "administrator",
    });
  };

  const onToggleModal = () => {
    setOpenModal((isOpen) => !isOpen);
  };
  return (
    <Home
      {...{
        data,
        error,
        isLoading,
        onToggleModal,
        onChangeUser,
        isOpenModal,
      }}
    />
  );
});

export default function () {
  const { data = [], isLoading, isError: error } = useQuery(
    "posts",
    fetchPosts,
    config
  );

  return (
    <ShowMoreProvider data={data}>
      <HomeContainer {...{ data, isLoading, error }} />
    </ShowMoreProvider>
  );
}
