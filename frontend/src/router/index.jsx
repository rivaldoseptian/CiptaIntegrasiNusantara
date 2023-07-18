import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import SearchGiphy from "../pages/searchGiphy";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/giphy",
        element: <SearchGiphy />,
      },
    ],
  },
]);

export default router;
