import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';

const Layout = () =>{
  return (
    <div className="app">
      {/* <Navbar />  */}
        <Outlet />
      {/* <Footer /> */}

      {/*PS:  Navbar & Footer will be common for every page */}
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
        path:'/dashboard',
        element: <Dashboard />
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
