import React from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'



const BeforeFooter = () => {
  const navigate = useNavigate()
  return (
    <div className='before--footer bg-white align-items-center text-center d-block py-3'>
        <hr />
            <p className='pt-3'>See personalized recommendations</p>
            <button onClick={()=>navigate('/login')} className=' border-0 rounded-2 fw-bold '>Sign in</button>
            <p className='pb-3'>New customer? <Link className=' text-decoration-none' to='/login'><span  className='text-primary'>Start here</span></Link>  </p>
        <hr />
    </div>
  )
}

export default BeforeFooter