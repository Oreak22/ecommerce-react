import React, { useEffect, useState } from 'react'
import Usersbtn from '../../../components/Usersbtn'
import AddToCarthBtn from '../../../components/AddToCarthBtn'
import axios from 'axios'

const Discription = ({discription,admin}) => {
    const [purchase, setPurchase] = useState(admin?false:true)
    const [quantity, setQuantity] = useState(1)
    const [wishlisted, setwishlisted] = useState(false)
    const [inCart, setInCart] = useState(false)
    // const [wishlistes, setWishlistes] = useState(false)
    // const [discription, setDiscription] = useState({})

    // useEffect(() => {
    // //   setDiscription(discription)
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    useEffect(() => {
      if(!admin){
        const url = 'http://localhost:5000/order/findonestuff'
        axios.get(url,{headers:{productId:discription._id}}).then((res)=>{
          if(res.data.result.orderState === 'inCart'){
            setInCart(true)
            console.log(inCart)
          }
          if(res.data.result.orderState==='inWishlist'){
            setwishlisted(true)
            console.log(wishlisted)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    
      return () => {
        
      }
    }, [])
    
    
  return (
    <>
        <section className="w-100">
            <div className="row justify-content-center justify-content-lg-between ">
                <div className="col-lg-2 col-4">
                    <div className="row justify-content-between g-3"style={{height:'100%'}}>
                        {discription.pic.otherView.map((item,index)=>{
                            return <div style={{width:'80%'}} key={index} className="col-lg-10 col-3 b-blue text-center d-flex align-items-center shadow-sm">
                                <img src={item} alt="" className="p-2 m-auto img-fluid" style={{width:''}} />
                            </div> 
                        })}
                    </div>
                </div>
                <div className="col-md-7 col-lg-4 col-8 shadow-sm">
                    <div className="row justify-content-center align-items-center b-blue" style={{height:'100%',}}>
                        <div className="col-md-11 bg-" style={{ width:'fit-content'}}>
                            <img src={discription.pic.fullView} className='img-fluid mx-auto' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                  <div className="row justify-content-center ">
                    <div className="col-lg-10 col-12">
                        <div className="row justify-content-center">

                            <div className="col-md-5 col-12 col-lg-12">
                                <h3 className='text-capitalize'>{discription.goodsname}</h3>
                               {
                                purchase ? 
                                <>
                                 <p className="text-mute d-flex mb-1 mt-3">
                                    <span className="h5 d-flex jusify-content-center g-2 text-warning">
                                        <i className={discription.rating >= 1?"bi bi-star-fill":"bi bi-star"}></i>
                                        <i className={discription.rating >= 2?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                                        <i className={discription.rating >= 3?"bi bi-star-fill":"bi bi-star ps-1"}></i>
                                        <i className={discription.rating >= 4?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                                        <i className={discription.rating >= 5?"bi bi-star-fill ps-1":"bi bi-star tx-blue ps-1"}></i>
                                    </span>
                                    <span className="px-2">|</span> <span className="text-success h5">in Stock</span>
                                </p>
                                </>:
                                 <p className="text-mute d-flex mb-1 mt-3">
                                 <span className="h5 d-flex jusify-content-center g-2 text-warning">
                                     <i className={discription.rating >= 1?"bi bi-star-fill":"bi bi-star"}></i>
                                     <i className={discription.rating >= 2?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                                     <i className={discription.rating >= 3?"bi bi-star-fill":"bi bi-star ps-1"}></i>
                                     <i className={discription.rating >= 4?"bi bi-star-fill ps-1":"bi bi-star ps-1"}></i>
                                     <i className={discription.rating >= 5?"bi bi-star-fill ps-1":"bi bi-star tx-blue ps-1"}></i>
                                 </span>
                                 <span className="px-2">|</span> <span className="text-danger h5">Adding to Stock</span>
                             </p>
                               }
                                <div className="display-6 mt-0 ">
                                    <span className='me-2 tx-red'>#{(discription.price-Math.round((discription.discount/100)*discription.price))}</span>
                                    <span className='display-7 text-decoration-line-through'>#{discription.price}.00</span></div>
                                <div className='mt-2'>{discription.discription}</div>
                            </div>
                            <hr className="my-4 d-md-none d-lg-block" />
                            <div className="col-md-6 col-12col-md-5 col-12 col-lg-12">
                                <div className="d-flex align-items-center">
                                    <label htmlFor="" className='me-2 h5'> Colors:</label>
                                    <div className='d-flex h5'>
                                        {discription.color.map((item,index)=>{
                                            return <div className="form-check " key={index}>
                                            <input className="form-check-input bg shadow-sm" style={{'background-color':item}}  type="radio" name="color" id={item} />
                                            </div>
                                        })}
                                        
                                    </div>
                                    
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <label htmlFor="" className='me-2 h5'> Size:</label>
                                    <div className='d-flex h5'>
                                        <div
                                            className="btn-group justify-content-between"
                                            role="group"
                                            aria-label="Basic checkbox toggle button group"
                                        >
                                        
                                        {discription.size.map((item,index)=>{
                                            return < >
                                                <input
                                                type="radio"
                                                className="btn-check "
                                                name="btnradio"
                                                id={item}
                                                autocomplete="off"
                                                key={index}
                                            />
                                            <label
                                                className="btn btn-outline-dark rounded-1 p-0 py-1 mx-2 d-flex align-items-center text-uppercase justify-content-center"
                                                style={{width:'2.5rem'}}
                                                for={item}
                                                key={index}
                                                >{item}
                                                </label>
                                            </>
                                        })}
                                        </div>
                                        
                                        
                                    </div>

                                </div>
                        
                                <div className="pt-2 d-flex align-items-center">
                                    <div className='d-flex align-items-center'>
                                        <button  className="btn btn-outline-dark m-0 rounded-0 rounded-start-2" disabled={admin?true:false} onClick={()=> quantity <=1 ?setQuantity(1):setQuantity(quantity - 1)}>
                                            <i className="bi bi-dash-lg"></i>
                                        </button>
                                        <input type="number" className='m-0 text-center p-2' value={quantity} disabled style={{height:'100%',border:'none',outline:'none',width:'5rem'}} min={1} />
                                        <button  className="btn btn-outline-dark m-0 rounded-0 rounded-end-2" disabled={admin || inCart ?true:false} onClick={()=>setQuantity(quantity + 1)}> 
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                    <div className="d-flex mx-3">
                                        <AddToCarthBtn orderQuantity={quantity} add={inCart} productName={discription.goodsname} productId={discription._id} productPrice={discription.price} productPic={discription.pic.fullView}/>
                                        {/* <button className="btn btn-dark rounded-1 px-5" disabled={admin?true:false}>Buy Now</button> */}
                                        <button className="btn btn-outline-dark rounded-1 mx-3" disabled={admin || wishlisted ?true:false}>
                                            <i className={wishlisted?"bi bi-heart-fill":"bi bi-heart"}></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="w-100 shadow-sm mt-3" style={{border:"solid thin black"}}>
                                    <div className="pt-3 px-3 d-flex align-items-center">
                                        <i className='h3 bi bi-truck'></i>
                                        <div className="ms-3 lh-4">
                                            <strong>Free Delivery</strong>
                                            <p>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>
                                    <hr className="m-0 p-0" />
                                    <div className="pt-3 px-3 d-flex align-items-center">
                                        <i className='h3 bi bi-arrow-repeat'></i>
                                        <div className="ms-3 lh-4">
                                            <strong>Return Delivery</strong>
                                            <p>Free 30 Days Delivery Returns. Details</p>
                                        </div>
                                    </div>
                                </div>
                            
                                       
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Discription