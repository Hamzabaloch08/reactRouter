import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contect from "./components/Contect/Contect";
import User from "./components/User/User";
import Github from "./components/Github/Github";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "contect", element: <Contect /> },
      {
        path: "github",
        element: <Github />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
