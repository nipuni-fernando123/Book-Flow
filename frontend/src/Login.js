import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from './Images/logo.png';
import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function LogIn() {
    const [values,setValues]=useState({
        email:'',
        password:''
    })

    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8082/login' , values)
        .then(res=>{
            if(res.data.Status==="Success"){
                navigate('/')
            }
            else
            {
                alert(res.data.Error);
            }
        })
        .then(err=>console.log(err));
    }


  return (
    <div className=" bg-[#95ccd1] w-screen h-screen overflow-hidden  bg-cover bg-center  ">
        <div className='flex justify-end pt-8 pr-8'>
        <Link to="/" className="text-decoration-none text-white"><BiSolidHome size={50} className='text-black pr-4 hover:text-white '/></Link>
        <button className='w-32 bg-black rounded-md hover:bg-gray-600 '><div className='text-white font-semibold text-lg'><Link to="/register" className="text-decoration-none text-white">Register</Link></div></button>
        </div>
       <div className=' flex justify-center w-screen h-screen items-center '>
        <div className='bg-white border border-gray-200  pb-4 rounded-xl mb-16 shadow-lg w-[700px] mx-[300px] px-[45px]'>
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center mt-8 mb-4'>
                <img src={logo} className='h-[95px] w-[95px] pb-[10px]'/>
                <div className='pl-2 p-1 text-center '> 
                    <div className='flex text-3xl text-left font-bold'><div className='text-[#95ccd1]'>Book</div><div className='text-[#c11c35]'>Flow</div></div>
                    <div className='text-black text-md font-semibold'>Simplifying Book Management, Effortlessly</div>
                </div>
            </div>
           

         
           

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Email</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter email' onChange={e=>setValues({...values,email:e.target.value})}
                 className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Password</label></div>
                <div className='w-96'>
                <input type="password"  placeholder='Enter password' onChange={e=>setValues({...values,password:e.target.value})}
                className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

          

            <div className='flex justify-end mt-8 mb-4'>
                <button className='w-32 bg-slate-600 p-1 rounded-md hover:bg-slate-800'><div className='text-white font-semibold text-md'>Login</div></button>
            </div>
        </form>
        </div>
       </div>
    </div>
  )
}

export default LogIn
