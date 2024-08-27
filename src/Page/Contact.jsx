import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Navbar pageContact={true}/>
    <section className="container-lg my-md-5">
            <div className="row justify-content-between g-1 ">
                <div className="col-md-4 shadow-sm p-md-4 rounded-1">
                   <div className="d-flex align-items-center my-5">
                   <i className="rounded-pill b-red bi bi-telephone text-light h4 py-md-2 px-md-3"></i>
                   <p className="mx-3 my-0 fw-bold">Call To Us</p>
                   </div>
                   <div className='lh-1 '>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                   </div>
                   <hr className="my-5 fw-bold" />
                   <div className="d-flex align-items-center">
                   <i className="rounded-pill b-red bi bi-send text-light h4 py-md-2 px-md-3"></i>
                   <p className="mx-3 my-0 fw-bold">Write To US</p>
                   </div>
                   <div className='lh-1 my-5'>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                   </div>
                </div>
                <div className="col-md-7 shadow-sm p-md-4 rounded-1">
                    <div className="my-5 row">
                        <div class="col-md-4 mb-3  ">
                            <input type="text" class="form-control py-3 rounded-3 b-blue sign-input" id="floatingInput" placeholder="Your Name *" />
                        </div>
                        <div class="col-md-4 mb-3  ">
                            <input type="email" class="form-control py-3 rounded-3 b-blue sign-input" id="floatingInput" placeholder="Your Email *" />
                        </div>
                        <div class="col-md-4 mb-3  ">
                            <input type="number" class="form-control py-3 rounded-3 b-blue sign-input" id="floatingInput" placeholder="Your Phone *" />
                        </div>
                        <div class="col-md-12 mb-3  mt-md-4">
                            <textarea rows='10'  class="form-control rounded-3 b-blue sign-input" id="floatingInput" placeholder="Your Message *" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className="btn-lg px-4 py-3 hover-blue btn b-red rounded-2 text-light">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact