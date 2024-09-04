import React, { useContext, useEffect, useState } from 'react'
import { LoadingContent } from '../components/LoadingState'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'

const Account = () => {
    const {setIsLoading} = useContext(LoadingContent)
    const [user_data, setuser_data] = useState({})
    const [uname, setUname] = useState()
    const [uaddress, setUaddress] = useState()
    const [uemail, setUemail] = useState()
    const [upassword, setUpassword] = useState()
    const [oldPassword, setOldPassword] = useState()
    const [ulast_name, setUlast_name] = useState()
    // const [newdetail, setnewdetail] = useState()
    const navigate =useNavigate()
   
    const editDetails= ()=>{
        const url = 'https://ecommerceserver24.vercel.app/auth/editdetail'
        const newdetail = {
            updateDetails:{
                uname,
                ulast_name,
                uemail:user_data.uemail,
                uaddress,
                upassword,
            },
            oldPassword,
            _id:JSON.parse(localStorage.getItem('exclusive')).account_id
        }
        axios.post(url,newdetail).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=> {
        setIsLoading(true)
        const url = 'https://ecommerceserver24.vercel.app/user/userInfo'
        const _id= {user_id:JSON.parse(localStorage.getItem('exclusive')).account_id}
        axios.get(url,{headers:_id}).then((res)=>{
            setuser_data(res.data.user_data)
            setUname(res.data.user_data.uname)
            setUlast_name(res.data.user_data.ulast_name)
            setUemail(res.data.user_data.uemail)
            setUaddress(res.data.user_data.uaddress)
            setUlast_name(res.data.user_data.ulast_name)
            setIsLoading(false)
        }).catch((err)=>{
            navigate('/signin')
        })
        
      
    }, [])
    
    
  return (
    <>
        <Navbar account={true}/>
        <section className="container-lg my-md-5 py-2">
            <div className="cartbreadcrubs pb-5 d-flex my-5 justify-content-between align-items-center">
                <div className="d-flex">
                    <Link className='nav-link me-3' to='/'>Home</Link> / <Link className='nav-link fw-bold ms-3'>My Account</Link>
                </div>
                <div className="">
                    <strong><small>Welcome! <span className='tx-red text-capitalize'>{user_data.uname}</span></small></strong>
                </div>
            </div>
            <div className="row justify-content-between align-items-top">
                <div className="col-md-2">
                    <div>
                        <h4 className="header h5">
                            Manage My Account
                        </h4>
                        <div style={{width:'fit-content'}} className=" mx-auto my-3">
                            <ul className="nav-navbar lh-lg">
                                <li className="nav-item"><Link className='nav-link tx-red'>My Account</Link></li>
                                <li className="nav-item"><Link className='nav-link'>Address Book</Link></li>
                                <li className="nav-item"><Link className='nav-link'>My Payment Options</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="header h5">
                            My Orders
                        </h4>
                        <div style={{width:'fit-content'}} className=" mx-auto my-3">
                            <ul className="nav-navbar lh-lg">
                                <li className="nav-item"><Link className='nav-link'>My Returns</Link></li>
                                <li className="nav-item"><Link className='nav-link'>My Collections</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="header h5">
                          My Wishlist
                        </h4>
                    </div>
                </div>
                <div className="col-md-9 rounded-1 shadow-sm px-md-5 py-md-4">
                    <div className="py-md-2 px-md-2">
                        <h4 className="tx-red">Edit Your Profile</h4>

                        <div className='row justify-content-between'>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">First Name</label>
                                
                                <input type="text" className="form-control py-2 b-blue" value={ uname} id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=>setUname(e.target.value)}/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Last Name</label>
                                
                                <input type="text" className="form-control py-2 b-blue" value={ user_data.ulast_name} id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=>setUlast_name(e.target.value)}/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                                
                                <input type="email" className="form-control py-2 b-blue" value={ user_data.uemail} id="exampleInputEmail1" disabled aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold ">Address</label>
                                
                                <input type="text" className="form-control py-2 b-blue" id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=>setUaddress(e.target.value)}/>
                            </div>

                            <div className="mb-3 col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password Changes</label>
                                    <input type="password" placeholder='Current Password' className="form-control b-blue py-2" id="exampleInputPassword1" onChange={(e)=>setOldPassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" placeholder='New Password' className="form-control b-blue py-2" id="exampleInputPassword1" onChange={(e)=>setUpassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" placeholder='Confirm Password' className="form-control b-blue py-2" id="exampleInputPassword1"/>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button className="btn-lg btn rounded-1 me-2 px-5">Cancle</button>
                                <button className="btn-lg btn-outline-danger btn text-light rounded-1 px-5 b-red" onClick={editDetails}>Save Changes</button>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>

    </>
  )
}

export default Account