import React from "react";
import { Route, Routes } from "react-router";
import { Article } from "./components/Article";
import { Editor } from "./components/Editor";
import { AddArticle } from "./pages/AddArticle";
import { DeleteArticle } from "./pages/DeleteArticle";
import { EditArticle } from "./pages/EditArticle";
import { Hitchhike } from "./pages/Hitchhike";
import { Home } from "./pages/Home";
import { TuringTumble } from "./pages/TuringTumble";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turing-tumble" element={<TuringTumble />} />
      <Route path=":articleType/:id" element={<Article />} />
      <Route path=":articleType/add" element={<AddArticle />} />
      <Route path=":articleType/:id/delete" element={<DeleteArticle />} />
      <Route path="/hitchhike" element={<Hitchhike />} />
    </Routes>
  );
};
