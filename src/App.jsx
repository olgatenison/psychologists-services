import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

export const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <button>COUNT</button>
      </BrowserRouter>
    </div>
  );
};
