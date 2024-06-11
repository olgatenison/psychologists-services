import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home";
import FavoritesPage from "./components/pages/Favorites/Favorites.jsx";
import PsychologistsPage from "./components/pages/Psychologists/Psychologists.jsx";
import Header from "./components/layout/Header/Header";
import ContainerWrap from "./components/generic/ContainerWrap/ContainerWrap";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./helpers/ProtectedRoute.jsx";

export const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ContainerWrap>
      <Header user={user} onLogin={handleLogin} onRegister={handleRegister} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute user={user}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </ContainerWrap>
  );
};
