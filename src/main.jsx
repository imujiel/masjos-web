import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// ⬇️ ganti BrowserRouter → HashRouter
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./styles/global.css";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Ecobrick from "./pages/Ecobrick.jsx";
import Biopori from "./pages/Biopori.jsx";

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ecobrick", element: <Ecobrick /> },
      { path: "/biopori", element: <Biopori /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
