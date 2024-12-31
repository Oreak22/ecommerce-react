import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import LoaderSmall from '../components/LoaderSmall'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Tokencheker from '../components/Tokencheker'
import { deleteFromWishlist } from '../redux/eccommerceGlobalData'
// import WishlistCard from 
const Wishlist = () => {
  const WishlistCard = React.lazy(()=>import('../components/WishlistCard'))
  const wishlistData = useSelector(state=>state.globalReducer.newWishlist)
  // const wishlistLength = useSelector((state)=>state.globalReducer.newWishlist.length)
  const dispatch = useDispatch()

  const movetocart =(data)=>{
    const url = 'https://ecommerceserver24.vercel.app/order/movetocart'
    axios.post(url,data).then((res)=>{
      console.log(res.data)
    }).catch((err)=>console.log(err))
  }
  const hey=()=>{
    wishlistData.map((data,index) => {
      movetocart(data)
      dispatch(deleteFromWishlist(index))
    })
  }

useEffect(() => {
  


  return () => {
    
  }
}, [])

  return (
    
    <>
    <Tokencheker/>
    <Navbar  nwishlist={true}/>
    {wishlistData.length > 0 ?(
      <section className="wishlistsection container-lg py-3">
      {/* {globalvalue} */}
      <div className="d-flex justify-content-between  align-items-center mt-5 py-3">
          <h5>Wishlist (4)</h5>
          <button title='Order All Wishlist' onClick={hey} className="btn btn-outline-dark rounded-1 px-5 py-2 shadow-sm">
              Move All To Bag
          </button>
      </div>
      <div className='row justify-content-start g-md-4 g-2  align-items-center'>
              {
                  wishlistData.map((index, items)=>{
                      return <div className="col-md-4 col-lg-3 col-6">
                       <Suspense key={items} fallback={<LoaderSmall/>}>
                        <WishlistCard key={items} index={items} data={wishlistData[items]}/>
                       </Suspense>
                      </div>
                  })
              }
      </div>
  </section>
    ):(
      <section className="wishlistsection container-lg py-3" >
        <div className="d-flex justify-content-center align-items-center" style={{height:'40dvh'}}>
          <div className='text-center lh-5'>
            Nothing wishlisted yet <br />
            Check out store and find what you like <br />
            <strong><Link to='/' className='tx-red'>Store</Link></strong>
          </div>
        </div>
      </section>
    )}
    <Footer/>
    </>
  )
}

export default Wishlist