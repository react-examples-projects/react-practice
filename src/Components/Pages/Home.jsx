import React, { useState, useEffect } from "react";
import Home from "./HomeComponent";
import ShowMoreProvider from "../Provider/ShowMoreProvider";
import fetchPosts from "../../Helpers/api";
import { useQuery } from "react-query";

export default function () {
  console.log("HomeContianer.jsx");
  const [isOpenModal, setOpenModal] = useState(false);

  const { data = [], isLoading, isError: error } = useQuery(
    "posts",
    fetchPosts,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

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
    <ShowMoreProvider data={data}>
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
    </ShowMoreProvider>
  );
}
