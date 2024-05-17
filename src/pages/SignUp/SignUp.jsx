import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../FirebaseAuth/FirebaseAuth'
function SignUp() {

const navigateLogin = useNavigate();

  const [userSignUp,setUserSignUp]=useState({username:"",email:"",password:""})

  const handleChange=(e)=>{
    setUserSignUp({...userSignUp,[e.target.name]:e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userSignUp.username || !userSignUp.email || !userSignUp.password){
      
      return toast.error("All fields are require")
      
    }else{
      createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then(async(res) => {
        const user = res.user

        await updateProfile(user,{
          displayName:userSignUp.username
        });

        navigateLogin('/login');
      })
      .catch((err)=>toast.error(err.message))
    };
  }
  return (
    <>
    <div className='text-grey-600 body-font w-[90%] sm:w-[80%] mx-auto mt-[60px]'>
      <div className='container px-5 py-10 mx-auto flex flex-wrap items-center item-center'>
        <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
          <h1 className='title-font font-medium text-4xl text-gray-900'>
            Get started with your account
          </h1>
          <p>Find your favrouite things here</p>
        </div>
        <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
            Sign Up
          </h2>
          <div className='relative mb-4'>
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              autoComplete='off'
              id='full-name'
              name='username'
              value={userSignUp.username}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              onChange={handleChange}
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              autoComplete='off'
              name='email'
              value={userSignUp.email}
              id='email'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              onChange={handleChange}
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              autoComplete='off'
              id='password'
              name='password'
              value={userSignUp.password}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              onChange={handleChange}
            />
          </div>
          <button
            className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <div>
            <p>
                Do you have an account?
            </p>
            <Link to='/login'>
                <button className='cursor-pointer hover:text-blue-300'>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp
