import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Suku from "./pages/suku/suku.jsx";
import Upacara from "./pages/upacara/upacara.jsx";
import MakananKhas from "./pages/makanan/index.jsx";
import TarianTradisional from "./pages/tarian/index.jsx";
import BajuAdat from "./pages/bajuadat/index.jsx";
import PermainanTradisional from "./pages/permainan-tradisional/index.jsx";
import Budaya from "./pages/budaya/index.jsx";
import Wisata from "./pages/wisata/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/suku",
    element: <Suku />,
  },
  {
    path: "/upacara-adat",
    element: <Upacara />,
  },
  {
    path: "/baju-adat",
    element: <BajuAdat />,
  },
  {
    path: "/makanan-khas",
    element: <MakananKhas />,
  },
  {
    path: "/tarian",
    element: <TarianTradisional />,
  },
  {
    path: "/permainan-tradisional",
    element: <PermainanTradisional />,
  },
  {
    path: "/budaya",
    element: <Budaya />,
  },
  {
    path: "/wisata-lokal",
    element: <Wisata />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
