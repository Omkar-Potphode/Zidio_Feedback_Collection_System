import React from 'react'
import { useParams, Link } from 'react-router-dom'

const FormDetails = () => {
  const {id} = useParams();
  
  return (
    <div>
      <Link to='/admin/dashboard'><u>Go back</u></Link>
      <p>Form No. {id}</p>
    </div>
  )
}

export default FormDetails