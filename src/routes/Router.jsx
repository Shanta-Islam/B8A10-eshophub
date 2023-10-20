import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>,
        },
        {
          path: '/product/:brand_name',
          element: <Products></Products>,
          loader: ({params})=> fetch(`http://localhost:5000/product/${params.brand_name}`)
        },
        {
          path: '/product-details/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/product-details/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>

        }
        
      ]
    },
  ]);

  export default router;