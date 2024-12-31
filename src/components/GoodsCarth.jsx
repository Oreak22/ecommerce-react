import React, { Suspense, useRef, useState } from 'react'
// import Pictures from './Pictures'
import naira from '../asset/img/naira.png'
import naira_red from '../asset/img/red_naira-removebg-preview.png'
import LoaderSmall from './LoaderSmall'
import AddToCarthBtn from './AddToCarthBtn'
import { Link } from 'react-router-dom'
import Wshlistbtn from './Wshlistbtn'

const GoodsCarth = ({datas}) => {
  const Pictures = React.lazy(()=>import ('./Pictures'))
  const [hover, setHover] = useState(false)
  // const hoverRef = useRef(null)
  // hoverRef.current.
  // const ratings = 4
  const {
    pic:{fullView},
    goodsname,
    price,
    discount,
    cart_qauntity,
    shipping,
    _id,
    rating
    } = datas
  const query = {goodsname:goodsname,id:_id}
  const queryParam = new URLSearchParams(query).toString()
  return (
    <>
    <div className=" p-0" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <div className="d-flex product-card justify-content-center py-0 align-items-center b-blue">
            <div className={discount > 0 ?'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-between ': 'costumer_action d-flex bg-transparent px-2 pt-2 justify-content-end align-items-'}> 
                {discount > 0 && <small className="b-red px-2 rounded-1 text-light" style={{height:'fit-content'}}>-{discount}%</small>}
               <div>
               <Wshlistbtn productId={_id} productPic={fullView} productPrice={discount >0 ? (price-Math.round((discount/100)*price)):price}  productName={goodsname}/>
               <br />
               <button className="btn btn-light rounded rounded-pill text-dark py-1 px-2 mt-2"><i className="bi bi-eye"></i></button>
               </div>
            </div>
            <Suspense fallback={<LoaderSmall/>}>
                <Pictures url={fullView}/>
            </Suspense>
          {
            hover 
            &&
            <div className="p-absolute w-100 cursor-pointer" >
             <AddToCarthBtn productId={_id} productPrice={discount >0 ? (price-Math.round((discount/100)*price)):price} productPic={fullView} productName={goodsname}/>
          </div>
          }
        </div>
        <div className="pt-3">
          <Link to={'/aboutproduct?'+queryParam} className='nav-link'>
            <h3 className="py-2 h6 text-capitalize text-wrap">
              {goodsname}
            </h3>
          </Link>
          <p className='d-flex justify-content-left mb-0 align-items-center'>
                <div className="h6 text-danger d-flex justify-content-center align-items-center">
                <img src={naira_red} className='img-fluid p-0 m-0' alt="" style={{width:'3rem'}}/>
                {discount >0 ? (price-Math.round((discount/100)*price)):price}
                </div>
                <div className="h6 text-muted d-flex justify-content-center mx-3 text-decoration-line-through align-items-center">
                {discount > 0 && <>
                    <img src={naira} className='img-fluid' alt="" />
                    {price}
                    </>
                }
                </div>
          </p>
            <p className="text-mute d-flex mb-1 mt-0">
                <span className="h5 d-flex jusify-content-center g-4 text-warning">
                    <i className={rating >= 1?"bi bi-star-fill":"bi bi-star"}></i>
                    <i className={rating >= 2?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                    <i className={rating >= 3?"bi bi-star-fill":"bi bi-star ps-1"}></i>
                    <i className={rating >= 4?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                    <i className={rating >= 5?"bi bi-star-fill ps-1":"bi bi-star tx-blue ps-1"}></i>
                </span>
          </p>
        </div>
    </div>
    </>
  )
}

export default GoodsCarth