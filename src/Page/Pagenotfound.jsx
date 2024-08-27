import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Pagenotfound = () => {
  return (
    <>
    <Navbar/>
    <section className="container-lg my-md-5 ">
            <div className="cartbreadcrubs pb-5 d-flex my-5 justify-content-between align-items-center">
                <div className="d-flex">
                    <Link className='nav-link me-3' to='/'>Home</Link> / <p className='nav-link fw-bold ms-3'>404 Error</p>
                </div>
                
            </div>
            <div className="text-center">
                <h1 className='fw-bold display-1'>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <Link to='/' className="btn btn-lg b-red text-light rounded-1 py-3 hover-blue my-5">Back to home page</Link>
            </div>
    </section>
    <Footer/>
    </>
  )
}

export default Pagenotfound