import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'


export const Login = () => {

  useEffect(()=>{
    sessionStorage.clear();
  },[])

  const [userName, setUsername]= useState("");
  const [password,setPassword]= useState("");

  const navigate= useNavigate();

  const proceedLogin =(e)=>{
    e.preventDefault();
    if(validate()){

      fetch('http://localhost:3333/user/'+userName).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
          toast.error('Please enter valid username')
        }else{
          if(resp.password===password){
            toast.success('Login Successfully')
            sessionStorage.setItem('username',userName);
            navigate('/')
          }else{
            toast.error('Please enter valid credentials')
          }
        }
      }).catch((error)=>{
        toast.error('Login Failed due to:'+error.message)
      })
    }
  }
  const validate=()=>{
    let result=true;
    if(userName===''|| userName=== null){
      result= false;
      toast.warning('Please enter User Name')
    }
    if(password===''|| password===null) {
      result= false;
      toast.warning('Please enter Password')
    }
    return result;
  }

  return (
    <div className='row'>
      <div className='offset-lg-3 col col-lg-6'>
        <form onSubmit={proceedLogin} className='container'>
        <div className='card'>
          <div className='card-header'>
            <h2>User Login</h2>
          </div>
          <div className='card-body'>
            <div className='form-group'>
              <label>User Name <span className='errmsg'>*</span></label>
              <input value={userName}  onChange={(e)=>setUsername(e.target.value)} className='form-control'></input>
            </div>
            <div className='form-group'>
              <label>Password<span className='errmsg'>*</span></label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'></input>
            </div>
          </div>
          <div className='card-footer'>
            <button type="submit" className='btn btn-primary'>Login</button>
            <Link className="btn btn-success" to={'/Registration'}>New User</Link>
          </div>
        </div>

        </form>
      </div>
    </div>
  )
}
