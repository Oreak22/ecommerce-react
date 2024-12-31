import React, { useState } from 'react'
import jacket from '../asset/img/dwish1.png'
import '../styles/additionalStyle.css'
import naira from '../asset/img/naira.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, deleteFromWishlist } from '../redux/eccommerceGlobalData'
import axios from 'axios'


const WishlistCard = ({data,index}) => {
  const dispatch = useDispatch()
  const cart_name= data.productName
  const product_id= data.productId
  const cart_img= data.productPic
  const cart_pp= data.productPrice
  const discount =0
  // costumerId,
  // orderDate: new Date(),
  const cart_qauntity= data.orderQuantity
  // orderState:'inCart',
  // const {
  //   cart_img,
  //   cart_name,
  //   cart_pp,
  //   discount,
  //   cart_qauntity,
  //   shipping,
  //   product_id
  //   } = datas
  const removeFromCart =()=>{
    const url = 'https://ecommerceserver24.vercel.app/order/removeWishlist'
    axios.post(url,{_id:data._id}).then((res)=>{
      if(res.data.status){
        dispatch(deleteFromWishlist(index))
      }
    }).catch((err)=>console.log(err))
  }
  const movetocart =()=>{
    const url = 'https://ecommerceserver24.vercel.app/order/movetocart'
    axios.post(url,data).then((res)=>{
      console.log(res.data)
      dispatch(deleteFromWishlist(index))
    }).catch((err)=>console.log(err))
  }
  return (
    <>
    <div className=" p-0 cursor-pointer ">
        <div className="d-flex product-card justify-content-center py-5 align-items-center b-blue" style={{boxSizing:'border-box'}}>
            <div className={discount > 0 ?'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-between align-items-center': 'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-end align-items-center'}> 
                {discount > 0 && <small className="b-red px-2 rounded-1 text-light">-{discount}</small>}
                <button className="btn btn-light rounded rounded-pill text-dark" onClick={()=>removeFromCart()}><i className="bi bi-trash3"></i></button>
            </div>
            <img src={cart_img} alt="Exclucive_product_img img-fluid" style={{width:'8rem'}}  className=' img-fluid'/>
          <div className="p-absolute w-100">
            <button className="btn btn-dark w-100" onClick={movetocart}>Add To Cart <i className='bi bi-cart'></i></button>
          </div>
        </div>
        <div className="pt-3">
          <h3 className="py-2 h6">
            {cart_name}
          </h3>
          <p className='d-flex justify-content-left align-items-center'>
            <div className="h6 text-danger d-flex justify-content-center align-items-center">
              <img src={naira} className='img-fluid' alt="" />
              {cart_pp}
            </div>
            <div className="h6 text-muted d-flex justify-content-center mx-3 text-decoration-line-through align-items-center">
              {discount > 0 && <>
                <img src={naira} className='img-fluid' alt="" />
                  {cart_pp}
                </>
              }
            </div>
          </p>
        </div>
    </div>
    </>
  )
}

export default WishlistCard