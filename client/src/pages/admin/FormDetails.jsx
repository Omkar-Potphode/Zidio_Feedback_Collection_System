import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom'

const FormDetails = () => {
  const {id} = useParams();
  
  return (
    <div>
      <Link to='/admin/dashboard'><AiOutlineLeft className='inline-block'/> <u>Go back</u></Link>
      <p>Form No. {id}</p>
    </div>
  )
}

export default FormDetails