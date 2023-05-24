import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Header /> },
    { path: "signin", element: <Login /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
