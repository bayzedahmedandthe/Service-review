
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layoutes/Layout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import AddService from "../Components/AddService";
import MyReviews from "../Pages/MyReviews";
import ErrorPage from "../Pages/ErrorPage";
import MyServices from "../Pages/MyServices";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/login", 
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/addservice",
          element: <AddService></AddService>
        },
        {
          path: "/myreviews",
          element: <MyReviews></MyReviews>
        },
        {
          path: "/myservices",
          element: <MyServices></MyServices>
        }
      ]
    },
  ]);



export default router;