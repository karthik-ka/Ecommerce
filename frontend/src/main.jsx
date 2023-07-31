import ReactDOM  from "react-dom/client";
import { createBrowserRouter,  Outlet, RouterProvider } from "react-router-dom";
import "./index.css"
import Navbar from "./component/Header/Navbar";
import Home from "./component/Home";
import Product from "./component/Product"
import Products from "./component/Products"
import Footer from "./component/Footer";
import Error from "./component/Error";


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
      errorElement: <Error />,
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
          path: "/products/:id",
          element: <Products />
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)