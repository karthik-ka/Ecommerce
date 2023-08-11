import ReactDOM  from "react-dom/client";
import { createBrowserRouter,  Outlet, RouterProvider } from "react-router-dom";
import "./index.css"
import Navbar from "./component/Header/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Products from "./pages/Products"
import Footer from "./component/Footer";
import Error from "./component/Error";
import Cart from "./pages/Cart";
import Wishlist from "./pages/wishlist";


const AppLayout = () => { 
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/wishlist",
          element: <Wishlist />
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)