import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";

import Header from "./components/layout/Header/Header";
import ContainerWrap from "./components/generic/ContainerWrap/ContainerWrap";

export const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <ContainerWrap>
          <Header />
          <Routes>
            <Route index path="/" element={<HomePage />}></Route>
          </Routes>
        </ContainerWrap>
      </BrowserRouter>
    </>
  );
};
