import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import SearchGiphy from "../pages/searchGiphy";
import Home from "../pages/Home";
import IronmanPage from "../pages/ironManGippy";

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
      {
        path: "/ironman",
        element: <IronmanPage />,
      },
    ],
  },
]);

export default router;
