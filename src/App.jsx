import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "./Components/PaginaPadrao";
import Rodape from "./Components/Rodape/Rodape";
import ScrollToTop from "./Components/ScrollToTop";
import NaoEncontrada from "./Pages/NaoEncontrada";
import Post from "./Pages/Post";
import Menu from "./Components/Menu";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import "./App.css";

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
