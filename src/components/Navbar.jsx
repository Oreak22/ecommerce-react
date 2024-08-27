import React, { useContext, useEffect, useState } from 'react'
import '../styles/additionalStyle.css'
import { Link } from 'react-router-dom'
import { LoadingContent } from './LoadingState'
import Usersbtn from './Usersbtn'
import { useSelector } from 'react-redux'
const Navbar = ({pageHome,pageContact,pageAbout,pageSign, account}) => {
    const [navopen, setnavopen] = useState(false)
    const cartdetail= useSelector((state)=>state.globalReducer.cart.length)
    const wishlist= useSelector((state)=>state.globalReducer.wishlist.length)
    const [profle, setProfle] = useState({status:false,nub:''})
    const {setIsLoading} = useContext(LoadingContent)
    const [navClass, setNavClass] = useState(
        {
            navbar_nav:"col-md-4 mt-3 d-md-block d-none",
            navbar_search:"col-md-5 col-10 d-none d-md-block"
        }
    )
    const toOtherPage = ()=>{
        setIsLoading(true)
    }

    const handlenav=()=>{
        if(navopen){
            setnavopen(false)
            setNavClass({
                navbar_nav:"col-md-4 mt-3 d-md-block d-none",
                navbar_search:"col-md-3 col-10 d-none d-md-block"
            })
        }else{
            setnavopen(true)
            setNavClass({
                navbar_nav:"col-md-4 mt-3 d-md-block d-block",
                navbar_search:"col-md-3 col-10 d-block d-md-block"
            })
        }
    }
       
  
    useEffect(() => {
      setIsLoading(false)
    }, [])
    
  return (
    <>
    <div className="w-100 text-light bg-dark text-capitalize">
        <marquee behavior="" direction="" className="fw-bold">Welcome to the home for all product</marquee>
    </div>
    <nav className='sticky-top w-100 bg-light'>
        <div className="container-lg py-md-2 py-4">
            <div className="row justify-content-center justify-content-md-between align-items-baseline">
                <div className="col-md-2 ">
                    <div className="d-flex justify-content-between">
                        <Link className=' m-0 navbar-brand fw-bolder fs-3' to='/'>Exclusive</Link>
                        <button className="btn d-block d-md-none bg-black tx-secondary hover-blue" onClick={handlenav}>{navopen?(<i className="bi bi-three-dots"></i>):(<i className="bi bi-three-dots-vertical"></i>)}</button>
                    </div>
                </div>
                <div className={navClass.navbar_nav } id='navbar_nav'>
                    <h3 className='d-md-none px-4'>Navigate</h3>
                    <ul style={{'lineHeight':"2.5rem"}} className="d-md-flex justify-content-evenly align-items-center">
                        <li className="nav-item">
                            <Link className={pageHome?'active nav-link':'nav-link '} to='/' onClick={toOtherPage}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageContact?'active nav-link':'nav-link '} to='/contact' onClick={toOtherPage}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageAbout?'active nav-link':'nav-link '} onClick={toOtherPage}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageSign?'active nav-link':'nav-link '} to='/signin' onClick={toOtherPage}>Sign In</Link>
                        </li>
                    </ul>
                </div>
                <div className={navClass.navbar_search} id='navbar_search'>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row  p-0 g-1 ">
                                <div className="col-10"><input type="text" className="w-100 ps-1 bk-secondary " placeholder='seach' /></div>
                                <div className="col-2">
                                    <button className="btn bk-secondary text-dark hover-blue">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 my-md-0 my-2">
                            <div className="row justify-content-evenly text-center">
                                <div className="col-4">
                                    <Link to='/mywishlist' title='Wishlist'  className='nav-link'>
                                        <Usersbtn icon='bi bi-heart' signal={wishlist<=0?{status:false,nub:wishlist}:{status:true,nub:wishlist}}/>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/mycart' title='My Cart' className='nav-link'>
                                        <Usersbtn icon='bi bi-cart' signal={cartdetail<=0?{status:false,nub:cartdetail}:{status:true,nub:cartdetail}}/>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/account' title='Account' className='btn-outline-dark nav-link'>
                                        <Usersbtn active={true} icon='bi bi-person' signal=''/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar