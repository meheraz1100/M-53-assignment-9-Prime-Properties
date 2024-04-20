
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import {
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Register/Register.jsx"
import About from './Pages/About/About.jsx'
import Home from './Pages/Home/Home.jsx'
import AuthProvider from './Pages/Providers/AuthProvider.jsx'
import Order from './Pages/Orders/Order.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path: 'propertyDetail/:id',
        element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
        loader: async () => {
          const response = await fetch('/data.json')
          const data = await response.json()
          return data;
        }
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/contactUs",
        element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
)
