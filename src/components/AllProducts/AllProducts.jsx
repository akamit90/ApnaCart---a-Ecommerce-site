import React, { useEffect, useState } from 'react';
import axios from 'axios';
import login from '../../assets/login.jpg';
import { Link } from 'react-router-dom';
import AllProductSimmer from '../AllProductSimmer/AllProductSimmer';

const AllProducts = ({AddToCart}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectProducts, setSelectProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  // AllProducts
  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProducts(res.data.products);
      setOriginalProducts(res.data.products);

      console.log(res.data.products);
    };
    fetchAllProducts();
  }, []);

  // Product category
  useEffect(() => {
    const fetchAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setAllCategory(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProductsCategory();
  }, []);

  const filterProducts = (selectcategory) => {
    setSelectProducts(selectcategory);

    const data = selectcategory
      ? originalProducts.filter((filterItem) => filterItem.category === selectcategory)
      : originalProducts;
    setAllProducts(data);
  };

  // Single product
  useEffect(() => {
    const fetchSingleProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(`https://dummyjson.com/products/category/${selectProducts}`);
          setAllProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProducts();
  }, [selectProducts]);

  // search product

  const handleSearchItem = () => {

    const searchProduct = originalProducts.filter((searchFilterItem) => (
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    ));
  
    setAllProducts(searchProduct);

  }

  // price filter

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    const filterPrice = originalProducts.filter((priceItem) => (
      (!min || priceItem.price >=min)&& (!max || priceItem.price <=max)
    ));
    setAllProducts(filterPrice);
  }

  return (
    <>
      <div className='relative mt-[80px]'>
        <img 
          src={login} 
          alt="" 
          className='object-cover w-full object-center h-[200px] mt-5'
        />
        <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
        <h2 className='absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>
          All Products
        </h2>
      </div>

      {/* Product category */}
      <div className='text-center mt-4 flex justify-end gap-8 mb-4'>
  <select 
    onChange={(e) => filterProducts(e.target.value)} 
    className="py-2 px-4 text-sm font-medium bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-600 dark:focus:border-indigo-600 transition-all"
  >
    <option>Filter by Category</option>
    {allCategory.map((item, index) => (
      <option value={item} key={index} className="text-black dark:text-white">
        {item}
      </option>
    ))}
  </select>
</div>



      {/* search product */}

      <div >
        <input 
        placeholder='search item ' 
        className='border-4 px-2 py-2 ml-auto'
        value={searchItem} 
        onChange={(e)=>setSearchItem(e.target.value)} 
        />
        <button 
  className="py-2.5 px-5 ml-4 text-sm font-medium transition-all bg-gray-600 text-white rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-900" 
  onClick={handleSearchItem}
>
  Search Product
</button>

      </div>
    
    {/* product filter by price */}

    
    <div className='text-center mt-4 mb-2 flex justify-center items-center md:flex-row flex-col gap-3' >
        <input 
        placeholder='min price ' 
        className='border-4 px-2 py-2'
        value={minPrice} 
        onChange={(e)=>setMinPrice(e.target.value)} 
        />
        <input 
        placeholder='max price ' 
        className='border-4 px-2 py-2 ml-3'
        value={maxPrice} 
        onChange={(e)=>setMaxPrice(e.target.value)} 
        />
        <button 
            className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-gray-600 text-white rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-900" 
            onClick={handlePrice}>
            Filter by price
        </button>

      </div>
    
    {
      !allProducts.length ? (<AllProductSimmer/>):(

           
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mt-8'>
      {allProducts.map((product) => (
        <div key={product.id} className='border p-4'>
          <Link to={`/singleproduct/${product.id}`}>
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className='object-cover object-center w-full h-48 mb-4'
          />
          </Link>
          <div className='flex justify-between items-center'>
            <h3 className='text-sm text-gray-500'>{product.title}</h3>
            <p className='text-sm text-gray-500'>Rating: {product.rating}</p>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <p className='text-gray-900'>Price: {product.price} Rs.</p>
            <button className='text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded'
            onClick={() => AddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
      )
    }

     
    </>
  );
};

export default AllProducts;