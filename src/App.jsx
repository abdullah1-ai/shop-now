import "./App.css";
import NavBar from "./Components/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ApiDataContextProvider from "./Context/ApiDataContext";
import AddToCartContextProvider from "./Context/AddToCartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Global styles
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { LocationFunProvider } from "./Context/LocationDetectContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "category-page/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "product-page/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return (
    <LocationFunProvider>
      <AddToCartContextProvider>
        <ApiDataContextProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <RouterProvider router={router} />
        </ApiDataContextProvider>
      </AddToCartContextProvider>
    </LocationFunProvider>
  );
}

export default App;
