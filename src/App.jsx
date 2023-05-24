import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: "signin", element: <Login /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
