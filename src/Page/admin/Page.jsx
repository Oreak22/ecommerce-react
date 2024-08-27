import React, { useContext, useEffect } from 'react'
import AdminNavbar from './AdminComponent/AdminNavbar'
import dummy from'./DUMMY.jpg'
import { Link } from 'react-router-dom'
import { LoadingContent } from '../../components/LoadingState'
import { useSelector } from 'react-redux'

const AdminPage = () => {
    const { setIsLoading} = useContext(LoadingContent)
    useEffect(() => {
      setIsLoading(false)
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
    <AdminNavbar/>
    <section className="container-lg py-5 my-5">
        <div className="row my-md-4">
            <div className="col-md-4 ">
                <div className="rounded-pill shadow-sm b-blue mx-auto mb-2" style={{width:'15rem', height:'15rem'}} >
                    <img src={dummy} style={{width:'15rem', height:'15rem'}} className='img-fluid rounded-pill'  alt="" />
                </div>
                <div className="mx-auto " style={{width:'fit-content'}}>
                    <div className='lh-1'>
                        <label htmlFor="" className='fw-bold tx-red '>Name</label>
                        <h3 className=' h4'>Rejoice Obe</h3>
                    </div>
                    <div className='lh-1'>
                        <label htmlFor="" className='fw-bold tx-red'>Admin Id</label>
                        <h3 className=' text-uppercase h4'>ex2034</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-7 p-0 rounded-2 shadow-sm">
                <div className="b-blue rounded-top-2 p-5">
                    <h2 className="tx-red text-center mb-3">Admin Page</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Welcome</h2>
                    <h2 className=" h6">Logged-In as <span className="tx-red h5">Rejoice</span> Id <span className="tx-red h5 text-uppercase">ex2034</span></h2>
                    </div>
                </div>
                <div className="p-5 pt-1">
                    <div className="alert alert-info my-3 text-center">
                        <span className="fw-bold">Note: </span>You have access to this page because you have been registered as an admin of this enterprise, and you can perform certain activities that will reflect all over the site
                    </div>
                    <div className="btn-group mx-auto justify-content-center" style={{width:'100%'}}>
                        <Link className="btn btn-outline-secondary" to='/admin/page/Addgoods'>Add2Goods</Link>
                        <Link className="btn btn-outline-secondary">Edit/Remove Goods</Link>
                        <Link className="btn btn-outline-secondary">Customise Ads</Link>
                        <Link className="btn btn-outline-secondary"><input type="text" className="rounded-1 form-control" placeholder='Search Product' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AdminPage