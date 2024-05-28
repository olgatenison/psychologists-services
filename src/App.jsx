import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";

export const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <HomePage></HomePage>
    </>
  );
};
