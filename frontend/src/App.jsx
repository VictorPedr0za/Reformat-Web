import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Conocenos from "./pages/Conocenos.jsx";
import Noticias from "./pages/Noticias.jsx";
import Contacto from "./pages/Contacto.jsx";
import LineasIndex from "./pages/lineas/LineasIndex.jsx";
import LineaDetail from "./pages/lineas/LineaDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lineas" element={<LineasIndex />} />
        <Route path="lineas/:slug" element={<LineaDetail />} />
        <Route path="conocenos" element={<Conocenos />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
