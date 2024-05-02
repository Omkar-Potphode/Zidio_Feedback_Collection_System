import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <h2>404</h2>
        <p >That page appears to be missing !
            <br />
            Take a ride back <Link to='/' id='error-link'> Home</Link>
        </p>
    </div>
  )
}

export default Notfound