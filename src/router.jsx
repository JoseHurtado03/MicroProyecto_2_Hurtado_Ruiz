import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import ClubCard from "./pages/ClubCard";
import Club from "./pages/Club";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/homePage",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/club",
    element: <Club />,
  },
  {
    path: "/clubcard",
    element: <ClubCard />,
  },
]);
