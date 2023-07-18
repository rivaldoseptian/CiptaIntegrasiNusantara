import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
