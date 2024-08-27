import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import Loader from '../components/Loaders'
import LoaderSmall from '../components/LoaderSmall'
// import WishlistCard from 

const Wishlist = () => {
  const WishlistCard = React.lazy(()=>import('../components/WishlistCard'))
    // const globalvalues = useSelector((state)=>state.globalReducer)
  const wishlistData = useSelector(state=>state.globalReducer.wishlist)
//   console.log(wishlistData)
  return (
    <>
    <Navbar  />
    <section className="wishlistsection container-lg py-3">
        {/* {globalvalue} */}
        <div className="d-flex justify-content-between  align-items-center mt-5 py-3">
            <h5>Wishlist (4)</h5>
            <button title='Order All Wishlist' className="btn btn-outline-dark rounded-1 px-5 py-2 shadow-sm">
                Move All To Bag
            </button>
        </div>
        <div className='row justify-content-between g-md-4 g-2  align-items-center'>
                {
                    wishlistData.map((index, items)=>{
                        return <div className="col-md-4 col-lg-3 col-6">
                         <Suspense key={items} fallback={<LoaderSmall/>}>
                         <WishlistCard key={items} datas={wishlistData[items]}/>
                         </Suspense>
                        </div>
                    })
                }
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Wishlist