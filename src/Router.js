import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Success from "./pages/Success";



  const router=createBrowserRouter([
    {
        element: <App/>,
        children :[{
            path: "/",
            element: <Home/>
        }]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path:"/products/:category",
        element:<ProductList/>
    },
    {
        path:"/products",
        element:<ProductList/>
    },
    {
        path:"/product/:id",
        element:<Product/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path:"/success",
        element: <Success/>
    }

  ]);

 export default router;