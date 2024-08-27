import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import HomePage from "./Pages/HomePage";
function App() {
  const create_router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={create_router}></RouterProvider>
    </div>
  );
}

export default App;
