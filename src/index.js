import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CoinItem, { loader as coinLoader } from "./coinItem";
import Coins from "./Coins";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Coins coins="my name" />,
      //   loader: coinLoader,
      // },
      {
        path: "/:coin",
        element: <CoinItem />,
        loader: coinLoader,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
