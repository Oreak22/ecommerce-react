import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { LoadingContent } from '../components/LoadingState'

import naira from '../asset/img/naira.png'
import { useDispatch, useSelector } from 'react-redux'
import { decreasePurchase, deleteFromCart, increasePurchase, push2Cart } from '../redux/eccommerceGlobalData'
import { current } from '@reduxjs/toolkit'

const CartItem=({cartdata,index})=>{
    const dispatch = useDispatch()
    const [cancelcart, setCancelcart] = useState(false)
    const {cart_img,cart_name,cart_pp,cart_qauntity,} =cartdata
    const cart_subtotal = cart_pp * cart_qauntity
    const cartitemscance=()=>{
        if(cancelcart){
            setCancelcart(false)
        }else{
            setCancelcart(true)
        }
    }

    return(
        <div className="cartbody" onMouseEnter={cartitemscance} onMouseLeave={cartitemscance} id='cartitem'>
                <div className="row shadow-sm rounded py-4 text-center my-3 align-items-center">
                    <div className="col-md-3 col-6 " style={{position:'relative'}}>
                        <div className='d-flex justify-content-evenly align-items-center'>
                            <img src={cart_img} alt="" className="img-fluid" /> <h6>{cart_name}</h6>
                            {cancelcart && <div className="canclecarttoggle"><button title='Remove from cart' onClick={()=>dispatch(deleteFromCart(index))} className="btn btn-close b-red rounded-pill p-1"></button></div>}
                        </div>
                    </div>
                    <div className="col-md-3 col-6" ><h6 className="d-md-none">Price</h6>
                        <div className="d-flex align-items-center justify-content-center"><img src={naira} alt="" className="img-fluid naira_icon" />{cart_pp}</div>
                    </div>
                    <div className="d-md-none">
                        <hr className='my-2 w-50 m-auto'/>
                    </div>
                    <div className="col-md-3 col-6 text-center " >
                        <h6 className="d-md-none">Quantity</h6>
                        <div className="cartCounter p-2 w-50 mx-auto rounded d-flex justify-content-center" >
                            <div>
                                <input type="number" value={cart_qauntity} aria-controls='none' min={1}/>
                            </div>
                            <div>
                                <button className="btn py-0" onClick={()=>dispatch(increasePurchase(index))}><i className="bi bi-chevron-up"></i></button>
                                <button className="btn py-0" onClick={()=>dispatch(decreasePurchase(index))}><i className="bi bi-chevron-down "></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 mt-md-0 mt-3 text-center" >
                        <h6 className="d-md-none">Subtotal</h6>
                        <div className="d-flex align-items-center justify-content-center"><img src={naira} alt="" className="img-fluid naira_icon" />
                    {cart_subtotal}
                    </div>
                    </div>
                </div>
            </div>
    )
}


const Cartpage = () => {
    const {setIsLoading} = useContext(LoadingContent)
    const cartdata = useSelector((state)=>state.globalReducer.cart)
    // console.log(cartdata)
    const navigate = useNavigate()
    const back2shop=()=>{navigate('/'); setIsLoading(true)}
    const handleLoading =()=>{
        setIsLoading(true)
    }
    const subtotal = cartdata.reduce((accumulator,current)=> accumulator + (current.cart_pp * current.cart_qauntity), 0 )
    const Shipping = cartdata.reduce((accumulator,current)=> accumulator + (current.shipping * current.cart_qauntity), 0 )


    useEffect(() => {
      setIsLoading(false)
    
      
    }, [])
    

  return (
    <>
    <Navbar/>
    <section className="container-lg mt-md-5 py-2">
        <div className="my-2">
            <div className="cartbreadcrubs d-flex  pt-4">
                <Link className='nav-link me-3' to='/' onClick={handleLoading}>Home</Link> / <Link className='nav-link fw-bold ms-3'>Cart</Link>
            </div>
            <div className='d-none d-md-block'>
                <div className="cartheader row  mb-4  shadow-sm rounded py-4 text-center">
                    <div className="col-md-3">
                        <h6>Product</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Price</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Quantity</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Subtotal</h6>
                    </div>
                </div>
            </div>

            <div>
            {/* <CartItem cartdata={cartdata[1]}/> */}
                {cartdata.map((n,i)=><CartItem index={i} key={i} cartdata={cartdata[i]}/>)}
            </div>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-outline-dark py-3 px-5" onClick={back2shop}>Return TO Shop</button>
                <button className="btn btn-outline-dark py-3 px-5">Update Cart</button>
            </div>
            <div className="payout my-3 mt-5 pt-4 row justify-content-between">
                <div className="col-md-5">
                    <div className="d-md-flex justify-content-evenly text-center mb-3 mb-md-3">
                        <input type="text" className='rounded mb-3 mb-md-0 w-md-50 px-dm-3 py-md-1 py-3 px-2 ' placeholder='Coupon Code' />
                        <button className="b-red btn hover-blue px-5 text-light rounded-1 py-md-2">Apply Coupon</button>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="p-3 rounded cart-bill">
                        <h3 className="h5 my-2">Cart Total</h3>
                        <div className="my-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Subtotal:</div>
                                <div className="d-flex align-items-center">
                                    <img src={naira} className='img-fluid naira_icon' alt="" />
                                    {subtotal}
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Shipping:</div>
                                <div className="d-flex align-items-center">
                                    <img src={naira} className='img-fluid naira_icon' alt="" />
                                    {Shipping}
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Total:</div>
                                <div className="d-flex align-items-center">
                                    <img src={naira} className='img-fluid naira_icon' alt="" />
                                    {Shipping + subtotal}
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn b-red hover-blue text-light px-5 py-3 mt-4">Procees Checkout</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Cartpage