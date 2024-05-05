import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonGradient from './assets/svg/ButtonGradient';

const Layout = () =>{
  return (
    <div className="app">
      <Header/>
        <Outlet />
        <ButtonGradient/>
      <Footer/>

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
    </div>
  )
}
