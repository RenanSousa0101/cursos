import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/Layout";
import AdminHome from "./pages/Home";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: "products",
            element: <Products />
        }, {
            path: "products/:productId",
            element: <Product />
        },{
            path: "cart",
            element: <Cart />
        }]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
])

export default router;