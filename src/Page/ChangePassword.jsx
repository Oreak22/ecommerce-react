import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingContent } from '../components/LoadingState'

const ChangePassword = () => {
    const [responce, setResponce] = useState({status:false,message:''})
    const [trg, setTrg] = useState(false)
    const {setIsLoading} = useContext(LoadingContent)
    const [newpassword, setNewpassword] = useState()
    const url ='https://ecommerceserver24.vercel.app//auth/resetpasword'
    
    const resetPassword =()=>{
        setIsLoading(true)
        axios.post(url,{newpassword}).then((res)=>{
            setResponce({status:res.data.status,message:res.data.message})
            setTrg(true)
            setIsLoading(false)
        }).catch((err)=>{
            setIsLoading(false)
        })
    }
  return (
    <section className="sign-body mt-5 pt-5">
    <div className="container-lg mt-5">
        <div className="row justify-content-lg-center justify-content-center align-items-center my-lg-4">
            
            <div className="col-lg-5 col-8">
                {trg && <div>
                {responce.status?(<div className="alert alert-success py-2 text-center"><small>{responce.message}</small></div>):<div className="alert alert-danger py-2 text-center"><small>{responce.message}</small></div>}
                </div>}
                <h3 className="h2 text-center">Reset Password</h3>
                <h6 className='my-2 text-center'>Enter new password</h6>
                <div className="w-100 mt-4">
                    <div class="form-floating mb-3">
                    <input type="password" class="form-control sign-input" id="floatingInput" onChange={(e)=>{setNewpassword(e.target.value)}} placeholder="New password"/>
                    <label for="floatingInput">New password</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control sign-input" id="floatingPassword" onChange={(e)=>{}} placeholder="Confirm password"/>
                    <label for="floatingPassword">Confirm Password</label>
                    </div>
                </div>
                {!responce.status && <div className="my-4 d-flex justify-content-center align-items-center w-100">
                    <button className="btn btn-outline-success w-100 py-2 my-1"  onClick={resetPassword}>Reset Password</button>
                </div>}
                {responce.status && <>
                {/* <div className="alert alert-success text-center mt-2">{}</div> */}
                <div className='text-center d-flex  my-4 justify-content-center'>
                    <span className='me-3'></span> <Link to="/signin" className="active nav-link"><span className="">Sign in</span></Link>
                </div></>}
            </div>
        </div>
    </div>
</section>
  )
}

export default ChangePassword