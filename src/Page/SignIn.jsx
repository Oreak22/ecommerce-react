import React, { useContext, useEffect, useState } from 'react'
import sign_cart from '../asset/img/dl.beatsnoop 1.png'
import googleIcon from '../asset/icons/Icon-Google.svg' 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { json, Link, useNavigate } from 'react-router-dom'
import { LoadingContent } from '../components/LoadingState'
import axios from 'axios'


const SignIn = () => {
    const [uemail, setemail] = useState()
    const [upassword, setpassword] = useState()
    const [errMessage, setErrMessage] = useState({status:false,message:''})
    const {setIsLoading} = useContext(LoadingContent)
    const navigate = useNavigate()
    const url ='http://ecommerceserver24.vercel.app/user/auth'
    const toOtherPage = ()=>{
        setIsLoading(true)
        console.log('tans')
    }
    const signin=()=>{
        const userdata = {uemail,upassword}
        setIsLoading(true)
        axios.post(url,userdata).then((res)=>{
            // console.log(res.data)
            if(res.data.status){
                setIsLoading(true)
                console.log(res.data.userInfo)
                localStorage.exclusive = JSON.stringify({account_id:res.data.userInfo._id,Session_token:res.data.tocken})
                navigate('/')
            }else{
                setErrMessage({status:true,message:res.data.message})
                setIsLoading(false)
            }
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }
    useEffect(() => {
      setIsLoading(false)
    }, [])
    
  return (
    <>
        <Navbar pageSign={true}/>
        <section className="sign-body ">
            <div className="container-lg mt-5">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-7 d-none d-lg-block">
                        <img src={sign_cart} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 col-8">
                        <h3 className="h2">Log in to Exclusive</h3>
                        <h6 className='my-2'>Enter your details below</h6>
                        <div className="w-100">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control sign-input" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value); setErrMessage({message:'',status:false})}}/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control sign-input" id="floatingPassword" onChange={(e)=>{setpassword(e.target.value); setErrMessage({message:'',status:false})}} placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                        </div>
                        {errMessage.status && (<div className="alert alert-danger py-2 text-center"><small>{errMessage.message}</small></div>)}
                        <div className="my-4 d-flex justify-content-between align-items-center w-100">
                            <button className="btn bt-red w-50 py-2 my-1" onClick={signin} >Sign In</button>
                            <div className='w-md-50'><Link to='/auth/recover' className='tx-red nav-link' onClick={toOtherPage}>Forget Password?</Link></div>
                        </div>
                        <div className='text-center d-flex justify-content-center'>
                            <span className='me-3'>Don't have account?</span> <Link to="/signup" className="active nav-link" onClick={toOtherPage}><span className="">Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default SignIn