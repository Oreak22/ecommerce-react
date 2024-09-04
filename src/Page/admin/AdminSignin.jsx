import React, { useContext, useEffect, useState } from 'react'
import { LoadingContent } from '../../components/LoadingState'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminSignin = () => {
    const [uemail, setemail] = useState()
    const [upassword, setpassword] = useState()
    const [errMessage, setErrMessage] = useState({status:false,message:''})
    const {setIsLoading} = useContext(LoadingContent)
    const navigate = useNavigate()
    const url ='https://ecommerceserver24.vercel.app/admin/auth'
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
                navigate('/admin/page')
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
    <section className="sign-body mt-5 pt-5">
    <div className="container-lg mt-5">
        <div className="row justify-content-lg-center justify-content-center align-items-center my-lg-4">
            
            <div className="col-lg-5 col-8">
                <h3 className="h2 text-center">Log in to Exclusive (Admin)</h3>
                <h6 className='my-2 text-center'>Enter your details below</h6>
                <div className="w-100 mt-4">
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control sign-input" id="floatingInput" onChange={(e)=>{setemail(e.target.value); setErrMessage({message:'',status:false})}} placeholder="name@example.com"/>
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
                    <div className='w-md-50'><Link className='tx-red nav-link' onClick={toOtherPage}>Forget Password?</Link></div>
                </div>
                <div className='text-center d-flex justify-content-center'>
                    <span className='me-3'>Don't have account?</span> <Link to="/admin/register" className="active nav-link" onClick={toOtherPage}><span className="">Sign Up</span></Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AdminSignin