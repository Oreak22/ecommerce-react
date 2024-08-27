import React, { useState } from 'react'
import jacket from '../asset/img/dwish1.png'
import '../styles/additionalStyle.css'
import naira from '../asset/img/naira.png'
import { useSelector } from 'react-redux'


const WishlistCard = ({datas}) => {
  const {
    cart_img,
    cart_name,
    cart_pp,
    discount,
    cart_qauntity,
    shipping,
    product_id
    } = datas
  return (
    <>
    <div className=" p-0 cursor-pointer ">
        <div className="d-flex product-card justify-content-center py-5 align-items-center b-blue">
            <div className={discount > 0 ?'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-between align-items-center': 'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-end align-items-center'}> 
                {discount > 0 && <small className="b-red px-2 rounded-1 text-light">-{discount}</small>}
                <button className="btn btn-light rounded rounded-pill text-dark"><i className="bi bi-trash3"></i></button>
            </div>
            <img src={cart_img} alt="Exclucive_product_img img-fluid" className='px-2 px-md-0 py-2 pb-4 wishpic img-fluid'/>
          <div className="p-absolute w-100">
            <button className="btn btn-dark w-100">Add To Cart <i className='bi bi-cart'></i></button>
          </div>
        </div>
        <div className="pt-3">
          <h3 className="py-2 h6">
            {cart_name}
          </h3>
          <p className='d-flex justify-content-left align-items-center'>
            <div className="h6 text-danger d-flex justify-content-center align-items-center">
              <img src={naira} className='img-fluid' alt="" />
              {discount >0 ?((discount/100)*cart_pp):cart_pp}
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