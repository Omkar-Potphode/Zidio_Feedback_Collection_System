import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import FormDetails from './pages/admin/FormDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonGradient from './assets/svg/ButtonGradient';
import Formslist from './pages/admin/Formslist';

const Layout = () =>{
  return (
    <div className="app">
      <Header/>
        <Outlet />
        <ButtonGradient/>
      <Footer/>
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
      // Admin routes given below
      {
        path:'/admin/dashboard',
        element: <Dashboard />
      },
      {
        path:'/admin/forms-list',
        element: <Formslist />
      },
      {
        path:'/admin/form/:id',
        element: <FormDetails />
      },
      // User routes below 

      {
        path: "*",
        element: <Notfound />
      }
    ]
  },
])

export default function App() {

  return (
    <div className="App pt-[3rem] sm:pt-[5.75rem] lg:pt-[5.25rem] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}
