import React,{useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
// import {setCredentials} from '../../redux/features/auth/authSlice'
// import {toast} from 'react-toastify'
// import { useRegisterMutation } from '../../redux/api/userSlice'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPw, setConfirmPw] = useState('')

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [register, {isLoading}] = useRegisterMutation();
  // const {userInfo} = useSelector(state => state.auth);

  const {search} = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  // useEffect(()=>{
  //   if(userInfo){
  //     navigate(redirect)
  //   }
  // },[navigate, redirect, userInfo])

  const submitHandler = async(e) => {
    e.preventDefault();
    if(password != confirmedPw){
      console.error('Passwords do not match !');
    }else{
      try{
        // const res = await register({username, email, password}).unwrap();
        // dispatch(setCredentials({...res}));
        console.log({username, email, password})
        navigate(redirect)
        // toast.success('User successfully registered !');
        
      } catch(error){
        console.log(error);
        // toast.error(error.data.message)
      }
    }
  }
  return (
    <section className='w-[100vw] h-[80vh] px-5'>
      <div className="mt-[5rem] sm:ml-[20rem]">
        <h1 className="text-3xl font-semibold mb-4">Register</h1>

        <form className="container w-[90vw] h-[28rem] sm:w-[50vw] " onSubmit={submitHandler}>

          <div className="my-[2rem]">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input type='text' id='name' className="mt-1 p-2 border rounded w-full" placeholder='Enter your name' value={username} onChange={(e)=> setUsername(e.target.value)} />
          </div>
          <div className="my-[2rem]">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address
            </label>
            <input type='email' id='email' className="mt-1 p-2 border rounded w-full" placeholder='Enter your e-mail' value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="my-[2rem]">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input type='password' id='password' className="mt-1 p-2 border rounded w-full" placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <div className="my-[2rem]">
            <label htmlFor="confirmPw" className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input type='password' id='cpassword' className="mt-1 p-2 border rounded w-full" placeholder='Re-enter your password' value={confirmedPw} onChange={(e)=> setConfirmPw(e.target.value)} />
          </div>
          {/* <button disabled={isLoading} type='submit' className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]">
            {isLoading ? 'Registering...' : 'Register'}
          </button> */}
          <button type='submit' className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem] float-right">Register</button>
          
          {/* {isLoading && <Loader/>} */}
        </form>
        <div className="mb-4">
          <p>
            Already have an account ? {' '}
            <Link to={redirect ? `/login?redirect-${redirect}` : '/login'} className='text-blue-500 hover:underline'>
            Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register