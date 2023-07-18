import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import SearchGiphy from "../pages/searchGiphy";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/giphy",
        element: <SearchGiphy />,
      },
    ],
  },
]);

export default router;
