import React, { useContext } from 'react'
import send_icon from '../asset/icons/icon-send.png'
import scan_icon from '../asset/icons/Qrcode 1.png'
import g_playapp from '../asset/img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import apple_playapp from '../asset/img/AppStore.png'
import facebook_icon from '../asset/icons/Vector.png'
import twitter_icon from '../asset/icons/Vector (1).png'
import instagram_icon from '../asset/icons/icon-instagram.png'
import linkedin_icon from '../asset/icons/Icon-Linkedin.png'
import cr_icon from '../asset/icons/Group.png'
import { LoadingContent } from './LoadingState'


const Footer = () => {
    const {setIsLoading} = useContext(LoadingContent)
    const handleloading=()=>{
        setIsLoading(true)
    }
  return (
    <footer className='w-100 bg-black mt-3 py-2 tx-secondary'>
        <div className="container-md py-5">
            <div className="row footer-content justify-content-center justify-content-md-between g-2">
                <div className="col-lg-2 col-md-6 col-10">
                    <h3 className='mb-3'>Exclusive</h3>
                    <a href="" className="nav-link my-2"><h5>Subscribe</h5></a>
                    <div>
                        <p>Get 10% off your first order</p>
                        <div className="d-flex justify-content-center w-100 rounded footer-email">
                            <input type="text" className="fw-lighter fs-small tx-secondary ps-2"  placeholder='Enter email'/>
                            <button className='btn'><img src={send_icon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-10">
                    <h4>Support</h4>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="col-lg-2 col-md-6 col-10">
                    <h4>Account</h4>
                    <div className="" style={{'lineHeight':'2rem'}}>
                        <li className="footer-link"><a href="" className="nav-link" onClick={handleloading}>My Account</a></li>
                        <li className="footer-link"><a href="" className="nav-link" onClick={handleloading}>Login / Register</a></li>
                        <li className="footer-link"><a href="" className="nav-link" onClick={handleloading}>Cart</a></li>
                        <li className="footer-link"><a href="" className="nav-link" onClick={handleloading}>Wishlist</a></li>
                        <li className="footer-link"><a href="" className="nav-link" onClick={handleloading}>Shop</a></li>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-10">
                <h4>Quick Link</h4>
                    <div className="" style={{'lineHeight':'2rem'}}>
                        <li className="footer-link"><a href="" className="nav-link">Privacy Policy</a></li>
                        <li className="footer-link"><a href="" className="nav-link">Terms Of Use</a></li>
                        <li className="footer-link"><a href="" className="nav-link">FAQ</a></li>
                        <li className="footer-link"><a href="" className="nav-link">Contact</a></li>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-10 text-center">
                    <h4 className='text-center'>Download App</h4>
                    <small className='text-center mx-auto'>Save $3 with App New User Only</small>
                    <div className="row my-2 g-0 justify-content-center">
                        <div className="col-md-6 text-center">
                            <img src={scan_icon} alt="" className="imgg-fluid" />
                        </div>
                        <div className="col-md-6 d-flex d-md-block justify-content-center">
                            <img src={g_playapp} alt="" className="img-fluid my-1" />
                            <img src={apple_playapp} alt="" className="img-fluid my-1" />

                        </div>
                        <div className='col-12 mt-2'>
                            <div className='row'>
                                <div className="col-3">
                                    <a href="" className="nav-link">
                                        <img src={facebook_icon} alt="" className="img-fluid" />
                                    </a>
                                </div>
                                <div className="col-3"><img src={twitter_icon} alt="" className="img-fluid" />
                                    <a href="" className="nav-link">
                                    </a>
                                </div>
                                <div className="col-3"><img src={instagram_icon} alt="" className="img-fluid" />
                                    <a href="" className="nav-link">
                                    </a>
                                </div>
                                <div className="col-3"><img src={linkedin_icon} alt="" className="img-fluid" />
                                    <a href="" className="nav-link">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="text-center text-muted d-flex my-2 justify-content-center">
                <img src={cr_icon} alt="" />
                <small>Copyright reak 2024.</small>
            </div>
    </footer>
  )
}

export default Footer