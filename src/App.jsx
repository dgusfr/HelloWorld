import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Menu />

    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
      </Route>

      <Route path="posts/:id/*" element={<Post />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>

    <Rodape />
  </BrowserRouter>
);

export default App;
