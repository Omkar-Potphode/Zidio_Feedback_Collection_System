import {createBrowserRouter,RouterProvider,Outlet, useLocation} from 'react-router-dom';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import FormDetails from './pages/admin/FormDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonGradient from './assets/svg/ButtonGradient';
import { FeedBackForms } from './pages/FeedBackForms';
import ProductReview from './pages/ProductReview';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import BugReportForm from './pages/BugReportForm';

const Layout = () =>{

  const location = useLocation();
  const excludedRoutes = ["/report-bug", "/forms"]; // Array of routes where Header and Footer should be excluded
  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  return (
    <div className="app">
      {!isExcludedRoute && <Header/>}
        <Outlet />
        <ButtonGradient/>
      {!isExcludedRoute && <Footer/>}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/register',
        element: <Register />
      },
      {
        path: '/forms',
        element: <FeedBackForms/>
      },
      {
        path: '/product-review',
        element: <ProductReview/>
      },
      {
        path: '/report-bug',
        element: <BugReportForm/>
      },


      // Admin routes
      {
        path:'/admin/dashboard',
        element: <Dashboard />
      },
      {
        path:'/admin/form/:id',
        element: <FormDetails />
      },
      
      {
        path: "*",
        element: <Notfound />
      }
    ]
  },
])

export default function App() {

  return (
    <div className="App pt-[5.75rem] lg:pt-[5.25rem] overflow-hidden">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}
