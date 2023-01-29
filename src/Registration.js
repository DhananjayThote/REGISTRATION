import { useState } from "react";
import React from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

export const Registration = () => {

    const [id,setId]=useState("");
    const [Name, setName]=useState("")
    const [password,setPassword]=useState("");
    const [email, setEmail]=useState("")
    const [phone,setPhone]=useState("");
    const [country, setCountry]=useState("")
    const [address,setAddress]=useState("");
    const [gender, setGender]=useState("male")

    const navigate =useNavigate()

    const isValidate=()=>{
        let isProceed = true;
        let errorMessage= "Please enter the value in ";
        if(id===null || id===''){
            isProceed= false;
            errorMessage+= 'username'
        }
        if(email===null || email===''){
            isProceed= false;
            errorMessage+= " "+'email'
        }
        if(Name===null || Name===''){
            isProceed= false;
            errorMessage+= " "+'Name'
        }
        if(password===null || password===''){
            isProceed= false;
            errorMessage+= " "+'password'
        }

        if(!isProceed){
            toast.warning(errorMessage)
        } else{
            if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)){
                
            }else{
                isProceed=false;
                toast.warning("Please enter the valid Email")
            }
        }
        return isProceed;    
    }

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        let regObj={id,Name,password,email,phone,country,address,gender};
        if(isValidate()){
        console.log(regObj);
        fetch('http://localhost:3333/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regObj)
        }).then((res)=>{
            toast.success('Registered Successfully.')
            navigate('/Login')
        }).catch((err)=>{
            toast.error('Failed:'+ err.message);
        })};
        
    }
    return (
        
        <div className='offset-md-3 col-md-6'>
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className='card-header'>
                        Registration
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='xs col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>User Name<span className='errmsg'>*</span></label>
                                    <input value= {id}  onChange={(e)=>setId(e.target.value)} className='form-control'></input>
                                </div>

                            </div>
                            <div className='xs col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Password<span className='errmsg'>*</span></label>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'></input>
                                </div>

                            </div>
                            <div className='col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Full Name<span className='errmsg'>*</span></label>
                                    <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className='form-control'></input>
                                </div>

                            </div>
                            <div className='col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Email<span className='errmsg'>*</span></label>
                                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
                                </div>

                            </div>
                            <div className='col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Phone<span className='errmsg'>*</span></label>
                                    <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control'></input>
                                </div>

                            </div>
                            <div className='col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Country<span className='errmsg'>*</span></label>
                                    <select value={country} onChange={(e)=>setCountry(e.target.value)} className='form-control'>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="Italy">Italy</option>
                                    </select>

                                </div>

                            </div>
                            <div className='col col-lg-12 col-sm-12'>
                                <div className='form-group'>
                                    <label>Address</label>
                                    <textarea value={address} onChange={(e)=>setAddress(e.target.value)}className='form-control'></textarea>
                                </div>
                            </div>
                            <div className='col col-lg-6 col-sm-12'>
                                <div className='form-group'>
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender==="male"} onChange={(e)=>setGender(e.target.value)} name="gender" value="male" className='app-check'></input>
                                    <label>Male</label>
                                    <input type="radio"checked={gender==="female"} onChange={(e)=>setGender(e.target.value)} name="gender" value="female" className='app-check'></input>
                                    <label>Female</label>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='card-footer'>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                        <a className='btn btn-danger'>Back</a>

                    </div>
                </div>
            </form>
        
        </div>
   
        
    )
}
