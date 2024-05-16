import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import FormDetails from "./pages/admin/FormDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux'
import {setCredentials} from './redux/features/authSlice'
import { GET_USER_DATA } from "./api/route";

const Layout = () => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getUserInfo = async()=>{
    if (!authData?.userInfo) {
      let userInfo = undefined;
      if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const token = userInfo?.token
        const {data} = await axios.get(GET_USER_DATA,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(data.msg === 'User Fetched Successfully'){
          localStorage.setItem("userInfo", JSON.stringify(data.data));
          dispatch(setCredentials(data));
        }
      }
    }
  }
  
  useEffect(() => {
    getUserInfo()
  },[authData]);

  return (
    <div className="app">
      <Header />
      <Outlet />
      <ButtonGradient />
      <ToastContainer />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
      // API_ROUTES
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // Admin routes
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/form/:id",
        element: <FormDetails />,
      },

      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="App pt-[5.75rem] lg:pt-[5.25rem] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}
