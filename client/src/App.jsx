import {createBrowserRouter,RouterProvider,Outlet, useLocation} from 'react-router-dom';
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import FormDetails from "./pages/admin/FormDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux'
import {setCredentials} from './redux/features/authSlice'
import { GET_USER_DATA } from "./api/route";
import { FeedBackForms } from './pages/FeedBackForms';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import BugReportForm from './pages/BugReportForm';
import AddFeatureForm from './pages/AddFeatureForm';
import OverallRatingForm from './pages/OverallRatingForm';
import CustomerSurvey from './pages/CustomerSurvey';

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
  
  const location = useLocation();
  const excludedRoutes = ["/report-bug", "/forms", "/add-feature", "/app-ratings", "/customer-survey"]; // Array of routes where Header and Footer should be excluded
  const isExcludedRoute = excludedRoutes.includes(location.pathname);
  
  return (
    <div className="app">
      {!isExcludedRoute && <Header/>}
      <Outlet />
      <ButtonGradient />
      <ToastContainer />
{!isExcludedRoute && <Footer/>}

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
      {
        path: '/forms',
        element: <FeedBackForms/>
      },
      {
        path: '/report-bug',
        element: <BugReportForm/>
      },
      {
        path: '/add-feature',
        element: <AddFeatureForm/>
      },
      {
        path: '/app-ratings',
        element: <OverallRatingForm/>
      },
      {
        path:'/customer-survey',
        element: <CustomerSurvey/>
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
      <ToastContainer />
    </div>
  );
}
