import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate= useNavigate();
  useEffect(()=>{
    let username= sessionStorage.getItem('username');
    if(username===''||username===null){
      navigate('/Login')
    }
  },[])
  return (
    <div>
      <div className='header'>
        <Link to={'/'}>Home</Link>
        <Link style={{float:'right'}}to={'/Login'}>Logout</Link>
      </div>
      <h1 className='text-center'>Welcome to home</h1>
    </div>
  )
}
