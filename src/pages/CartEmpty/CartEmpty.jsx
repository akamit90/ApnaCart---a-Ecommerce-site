import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartEmpty() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt="Empty Cart"
        className="w-64 h-64 mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300" onClick={()=>navigate("/allproducts")}>
        Start Shopping
      </button>
    </div>
  );
}

export default CartEmpty;
