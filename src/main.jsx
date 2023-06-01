import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "./components/Store/App/Store.js";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
    </QueryClientProvider>
  </React.StrictMode>
);
