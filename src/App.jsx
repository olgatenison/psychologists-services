import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import FavoritesPage from "./components/pages/Favorites/Favorites.jsx";

import Header from "./components/layout/Header/Header";
import ContainerWrap from "./components/generic/ContainerWrap/ContainerWrap";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const App = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Is Fetching....</h2>;
  }

  return (
    <BrowserRouter>
      <ContainerWrap>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </ContainerWrap>
    </BrowserRouter>
  );
};
