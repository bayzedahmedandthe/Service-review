
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
import PrivetRoute from "../Components/PrivetRoute";
import Details from "../Pages/Details";
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
        },
        {
          path: "/service/:id",
          element: <PrivetRoute><Details></Details></PrivetRoute>,
          loader: ({params}) => fetch(`https://assaignment-11-server-site.vercel.app/service/${params.id}`)
        }
      ]
    },
  ]);



export default router;