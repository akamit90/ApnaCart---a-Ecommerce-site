import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

function SingleProduct({AddToCart}) {
    const { productId } = useParams();
    const [singleproduct, setSingleProduct] = useState([]);
  
    useEffect(() => {
      const SingleProductFetch = async () => {
        try {
          const res = await axios.get(`https://dummyjson.com/products/${productId}`);
          setSingleProduct(res.data);
        } catch (err) {
          toast.error(err.message);
        }
      };
      SingleProductFetch();
    }, [productId]);

    const addToSingleProduct=()=>{
        AddToCart(singleproduct);
        toast.success("Product added to cart")
    }

  const allProductsNavigate = useNavigate();

    return (
      <div>
        <div className='w-[60%] mx-auto mt-4'>
        <p  
        className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer" 
        onClick={()=>allProductsNavigate("/allproducts")}
        >
          <svg 
          className="fill-current mr-2 text-indigo-600 w-4" 
          viewBox="0 0 448 512">
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          back
        </p>
        </div>
        <section className="text-gray-600 body-font overflow-hidden h-90vh flex items-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
              <img
                alt="Product"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={singleproduct.thumbnail}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div className="flex flex-col items-center">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleproduct.brand}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleproduct.title}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      {[...Array(5)].map((_, index) => (  // here value is empty (represent by "_" placeholder) here we care about index
                        <svg
                          key={index}
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className={`w-4 h-4 text-indigo-500 ${
                            index < singleproduct.rating ? "text-yellow-500" : "text-gray-400"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          ></path>
                        </svg>
                      ))}
                      <span className="text-gray-600 ml-3">{singleproduct.rating}</span>
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed">{singleproduct.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <div className="flex items-center">
                  <span className="title-font font-medium text-2xl text-gray-900">Rs. {singleproduct.price}</span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addToSingleProduct}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default SingleProduct;
  
