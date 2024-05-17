import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AllProducts from './components/AllProducts/AllProducts'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Cart from './pages/Cart/Cart'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from './FirebaseAuth/FirebaseAuth'
import SingleProduct from './pages/Singleproduct/SingleProduct'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {

  const [cart,setCart]=useState([])
  
  const [promocode,setPromoCode]=useState("")

  const [discount,setDiscount]=useState(0)

  const [invalid,setInvalid]=useState("invalid promocode")

  const [userName,setUserName]=useState("")
  

  const AddToCart =(product)=>{

    const isProductExist = cart.find((findItem)=>findItem.id===product.id)  // here we are finding if the product is already in the cart or not

    if(isProductExist){

        const upDateCart= cart.map((item)=>(
          item.id===product.id ? {...item,quantity:item.quantity+1}:item
        ))
        setCart(upDateCart);
        
        
      }else{
        setCart([...cart,{...product,quantity:1}])
        toast.success("Product added to cart")
    }
    
  };


  // increase quantity
  const handleInc =(id)=>{
    const incQuantity = cart.map((item)=>(
      item.id===id? {...item,quantity:item.quantity+1}:item
    ))
    setCart(incQuantity)
  }


  // decrease quantity
  const handleDec =(id)=>{
    const incQuantity = cart.map((item)=>(
      item.id===id && item.quantity > 0 ? {...item,quantity:item.quantity-1}:item
    ))
    setCart(incQuantity)
  }


  // remove from cart
  const handleRemove =(id)=>{
    const updateByFilter = cart.filter((filterItem)=>filterItem.id !== id)
    setCart(updateByFilter)
  }

  // calculte total price

  const getTotalPrice=()=>{
    const totalPrice=cart.reduce((total,cartReduceItem)=>{

      return total + cartReduceItem.price * cartReduceItem.quantity

    },0)
    return totalPrice - discount;
  }

  // Promocode
  const applyPromoCode=()=>{
    if(promocode==="DISCOUNT10"){
      setDiscount(getTotalPrice()*10/100)
      setPromoCode("")
    }else{
      setInvalid(invalid)
    }
  };
  
  // username display 
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  

  

  return (
 <>
  <div>
    <BrowserRouter>
    <Navbar cart={cart} userName={userName} />
    <Routes>
      <Route path='/' element={<Home AddToCart={AddToCart}/>}/>
      <Route path='/cart' 
      element={<Cart 
      cart={cart} 
      handleDec={handleDec} 
      handleInc={handleInc} 
      handleRemove={handleRemove} 
      getTotalPrice={getTotalPrice}
      applyPromoCode={applyPromoCode}
      promocode={promocode}
      setPromoCode={setPromoCode}
      invalid={invalid}
      />}/>
      <Route path='/allproducts' element={<AllProducts AddToCart={AddToCart}/>}/>
      <Route path='/singleproduct/:productId' element={<SingleProduct AddToCart={AddToCart}/>}  />     // here itemId is use to get the id of the product and get it in SingleProduct.jsx by using params
      <Route path='/login' element={<Login/>}  />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Toaster/>
    <Footer/>
    </BrowserRouter>
  </div>
 </>
  )
}

export default App


