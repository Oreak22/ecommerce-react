import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { LoadingContent } from '../components/LoadingState'
import { useNavigate } from 'react-router-dom'

const Recovermail = () => {
    const [email, setemail] = useState()
    const [ErrMessage, setErrMessage] = useState({status:false,message:''})
    const [respond, setrespond] = useState(false)
    const {setIsLoading} = useContext(LoadingContent)
    const navigate= useNavigate()
    const [countdown, setcountdown] = useState(60)
    const [seenCode, setSeenCode] = useState(false)
    const [tryagain, setTryagain] = useState(false)
    const [code, setCode] = useState()
    const url ='http://ecommerceserver24.vercel.app/auth/lostaccount'
    const url2 ='http://ecommerceserver24.vercel.app/auth/resetcode'
    
    const sendRecover = ()=>{
        setIsLoading(true)
        axios.post(url,{email}).then((res)=>{
            setrespond(true)
            setErrMessage({status:res.data.status,message:res.data.message})
            setIsLoading(false)
            setTryagain(true)

        }).catch((err)=>{
            setIsLoading(true)
            setTryagain(false)

        })
    }
    const enteercode=()=>{
        setIsLoading(true)
        axios.post(url2,{code}).then((res)=>{
            console.log(res)
            setErrMessage({status:res.data.status,message:res.data.message})
            setrespond(true)
            setIsLoading(false)
            if(res.data.status){
                navigate('/auth/resetpassword')
            }
        }).catch((err)=>{
            setErrMessage({status:false,message:'Something went wrong'})
            setrespond(true)
            setIsLoading(false)
        })
    }
    if(tryagain){
        {setTimeout(() => {
            if(countdown>0){
                setcountdown(countdown -1)
            }else{
                setTryagain(false)
                setcountdown(60)
                clearTimeout()
            }
        }, 1000)}
    }
    // useEffect(() => {
    //   countDown()
    
      
    // }, [tryagain])
    
  return (
      <>
    <Navbar/>
    <section className="mt-5 pt-5">
        <div className="container-lg pt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-9 col-md-6 col-lg-5">
                    <div className="my-5 w-100">
                        {respond && <div className="text-center mb-3">
                        {ErrMessage.status?<small className="alert alert-success py-2">{ErrMessage.message}</small>:<small className="alert alert-danger py-2">{ErrMessage.message}</small>}
                        </div>}
                        <div className='text-center'>
                            <h3 className='my-2 text-center'>Recover my account</h3>
                            <small className='mx-auto text-center w-100 fw-light'>A recovery code {seenCode?'has been':'will be'} sent to your email</small>
                        </div>
                        {!seenCode?<div class="form-floating mb-3">
                        <input type="email" class="form-control sign-input" id="floatingInput" onChange={(e)=>{setemail(e.target.value); setErrMessage({message:'',status:false}); setrespond(false) }} placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        :
                        <div class="form-floating mb-3">
                        <input type="number" class="form-control sign-input" id="floatingInput" onChange={(e)=>{setCode(e.target.value); setErrMessage({message:'',status:false}); setrespond(false) }} placeholder="******"/>
                        <label for="floatingInput">Enter code sent to your mail</label>
                        </div>}
                        {tryagain? 
                            <div className='d-flex justify-content-between align-items-center'><small>Didn't get the code? Try again in </small><span className="text-success">
                                {
                                    countdown
                                }
                               </span> <button className="btn btn-success" onClick={()=>{setSeenCode(true);setTryagain(false)}}>Input Code</button></div>
                            :
                            seenCode ? 
                            <div className='d-flex justify-content-between align-items-center'>
                                <button className="btn btn-outline-secondary" onClick={()=>{setSeenCode(false);setTryagain(true)}}>Resend code</button>
                                <button className="btn btn-success " onClick={enteercode}>Enter Code</button>
                            </div>
                            :
                            <button className="btn btn-outline-success btn-sm w-100 " onClick={sendRecover}>Recover My Account</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Recovermail