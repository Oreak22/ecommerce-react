import React, { useContext, useEffect, useState } from 'react'
import { LoadingContent } from '../../components/LoadingState'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import sign_cart from './DUMMY.jpg'

const AdminRegister = () => {
    const [uname, setname] = useState()
    const [uemail, setemail] = useState()
    const [aemail, setaemail] = useState()
    const [apassword, setapassword] = useState()
    const [uimg, setuimg] = useState()
    const [errMessage, setErrMessage] = useState({status:false,message:''})
    const [upassword, setpassword] = useState()
    const {setIsLoading} = useContext(LoadingContent)
    const navg8 = useNavigate()
    let url= 'https://ecommerceserver24.vercel.app//admin/registeradmin'
    const toOtherPage = ()=>{
        setIsLoading(true)
        console.log('tans')
    }
    const signupuser=()=>{
        setIsLoading(true)
        const admindata={newDetails:{uname,uemail,upassword},authrizedDetail:{aemail,apassword}}
        // console.log(admindata)
        axios.post(url,admindata).then((res)=>{
            // console.log(res.data)
            if(res.data.status){
                navg8('/admin/signin')
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
    <div className="container-lg ">
        <div className="row justify-content-lg-center justify-content-center align-items-center">
           
            <div className="col-lg-5 col-8">
                <h3 className="h2 text-center">Create an (Admin) account</h3>
                <h6 className='my-2 text-center'>Enter your details below</h6>
                <div className="w-100 mt-lg-4">
                    <div className="d-flex">
                        <div className="rounded rounded-pill text-center mb-2 d-flex align-items-center">
                            <label htmlFor="aimage" className='rounded rounded-pill bg-dark d-flex align-items-center' style={{height:'6rem',width:'6rem'}}>
                                {uimg?(<img src={sign_cart} alt="" className="rounded rounded-pill img-fluid" />):<i class="bi bi-camera w-100 fs-1 p-0 text-light"></i>}
                                 
                            </label>    <label htmlFor="aimage" className='ms-3 h5'>New Admin Picture</label>
                            <input type="file" accept=".jpg"  id='aimage' className='d-none'/>
                        </div>
                        
                    </div>
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control sign-input" id="floatingInput" placeholder="Name" onChange={(e)=>{setname(e.target.value); setErrMessage({message:'',status:false})}}/>
                    <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control sign-input" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value); setErrMessage({message:'',status:false})}}/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control sign-input" id="floatingPassword" placeholder="Password" onChange={(e)=>{setpassword(e.target.value); setErrMessage({message:'',status:false})}}/>
                    <label for="floatingPassword">Create Password</label>
                    </div>
                </div>
                {/* authenticating signup */}
                <div className="w-100 mt-lg-4">
                    <div class="form-floating mb-3">
                    <h4 className="text-center h5">Enter Identity of an athurized</h4>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control sign-input" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setaemail(e.target.value); setErrMessage({message:'',status:false})}}/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control sign-input" id="floatingPassword" placeholder="Password" onChange={(e)=>{setapassword(e.target.value); setErrMessage({message:'',status:false})}}/>
                    <label for="floatingPassword"> Your Password</label>
                    </div>
                </div>
                {errMessage.status && (<div className="alert alert-danger text-center py-2"><small>{errMessage.message}</small></div>)}
                <div className="my-4">
                    <button className="btn bt-red w-100 py-2 my-1" onClick={signupuser}>Create Account</button>
                    
                </div>
                <div className='text-center d-flex justify-content-center'>
                    <span className='me-3'>Aready have account?</span> <Link to="/admin/signin" className="active nav-link" onClick={toOtherPage}><span className="">Log In</span></Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AdminRegister