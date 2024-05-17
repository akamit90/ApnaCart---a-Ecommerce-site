import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import toast from 'react-hot-toast';
function Navbar({ cart,userName }) {

  const [isOpen, setIsOpen] = useState(false);

  // const ToggleOpen =()=>{
  //   setIsOpen(true)
  // }

  // const ToggleClose =()=>{
  //   setIsOpen(false)
  // }

  const ToggleChange=()=>{
    isOpen===false?setIsOpen(true):setIsOpen(false)
  }


  const handleLogout = () => {
    auth.signOut().then(()=>{
      toast.success("Logout successfully");
    }).catch((err)=>{
      toast.error(err)
    })
  }

  return (
    <>
      <div>
        <header className='bg-white border-b border-grey-200 relative'>
          <div className='container mx-auto flex justify-between items-center py-5'>
            <div>
              <Link to='/'>
              <h3 className='font-bold text-2xl'>
                Apna<span className='text-[orange]'>Cart</span>
              </h3>
              </Link>
            </div>
            <div className='hidden md:block'>
            <ul className='flex items-center text-lg justify-center font-semibold'>
              <Link to="/">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>Home</li>
              </Link>
              <Link to="/allproducts">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>All Products</li>
              </Link>
              <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>About</li>
              </Link>
              <Link to="/contact">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>Contact</li>
              </Link>
            </ul>
            </div>

            {
              isOpen?(<div>
              <ul className='flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold'>
                <Link to="/">
                <li className='mt-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>Home</li>
                </Link>
                <Link to="/allproducts">
                <li className='mt-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>All Products</li>
                </Link>
                <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>About</li>
              </Link>
              <Link to="/contact">
                <li className='mr-5 hover:text-grey-900 cursor-pointer' onClick={ToggleChange}>Contact</li>
              </Link>
              </ul>
              <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer' onClick={ToggleChange}><RxCross2 size={30} /></button>
              </div>):("")
            }


            <div className='flex justify-center items-center gap-3'>  
            {
              userName?(<div>
                <Link to="/login">
              <button className='bg-grey-100 border-0 py-1 px-3 focus:outline-none hover:bg-grey-200 rounded text-base font-semibold' onClick={handleLogout}>Logout</button>
              </Link>
              <span>{userName}</span>
              </div>):(<Link to="/login">
              <button className='bg-grey-100 border-0 py-1 px-3 focus:outline-none hover:bg-grey-200 rounded text-base font-semibold'>Login</button>
              </Link>
             )
            }
              

              <Link to="/cart">
              <button className='cursor-pointer relative'>
              <span className='absolute top-[-5px] right-0 text-white bg-[red] px-1 text-xs rounded-full'>
                {cart.length}
              </span>
                <FaShoppingCart size={25} />
                </button>
              </Link>

              {
                isOpen?"":<button className='md:hidden' onClick={ToggleChange}><GiHamburgerMenu size={25}/></button>
              }
              </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar; 