import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const PopularProducts = ({AddToCart}) => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");
        setPopularProduct(res.data.products);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchPopularProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popularProduct
        .filter((item,index)=>index !==4)
        .map((popularItem) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={popularItem.id}>
            <img src={popularItem.thumbnail} alt={popularItem.title} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-gray-900 font-semibold text-lg mb-2">{popularItem.title}</h2>
              <p className="text-gray-700 font-medium">{popularItem.price} ₹</p>
              <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={()=>AddToCart(popularItem)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
