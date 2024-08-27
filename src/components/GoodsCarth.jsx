import React, { Suspense, useRef, useState } from 'react'
// import Pictures from './Pictures'
import naira from '../asset/img/naira.png'
import LoaderSmall from './LoaderSmall'

const GoodsCarth = ({datas}) => {
    const Pictures = React.lazy(()=>import ('./Pictures'))
    const [hover, setHover] = useState(false)
    // const hoverRef = useRef(null)
    // hoverRef.current.
    const ratings = 4
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
    <div className=" p-0" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <div className="d-flex product-card justify-content-center py-5 align-items-center b-blue">
            <div className={discount > 0 ?'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-between ': 'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-end align-items-'}> 
                {discount > 0 && <small className="b-red px-2 rounded-1 text-light" style={{height:'fit-content'}}>-{discount}%</small>}
               <div>
               <button className="btn btn-light rounded rounded-pill text-dark py-1 px-2" title='Add to Wishlist'><i className="bi bi-heart"></i></button>
               <br />
               <button className="btn btn-light rounded rounded-pill text-dark py-1 px-2 mt-2"><i className="bi bi-eye"></i></button>
               </div>
            </div>
            <Suspense fallback={<LoaderSmall/>}>
                <Pictures url={cart_img}/>
            </Suspense>
          {
            hover 
            &&
            <div className="p-absolute w-100 cursor-pointer" >
                <button className="btn btn-dark w-100">Add To Cart <i className='bi bi-cart'></i></button>
          </div>
          }
        </div>
        <div className="pt-3">
          <h3 className="py-2 h6">
            {cart_name}
          </h3>
          <p className='d-flex justify-content-left mb-0 align-items-center'>
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
            <p className="text-mute d-flex mb-1 mt-0">
                <span className="h5 d-flex jusify-content-center g-4 text-warning">
                    <i className={ratings >= 1?"bi bi-star-fill":"bi bi-star"}></i>
                    <i className={ratings >= 2?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                    <i className={ratings >= 3?"bi bi-star-fill":"bi bi-star ps-1"}></i>
                    <i className={ratings >= 4?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                    <i className={ratings >= 5?"bi bi-star-fill ps-1":"bi bi-star tx-blue ps-1"}></i>
                </span>
          </p>
        </div>
    </div>
    </>
  )
}

export default GoodsCarth