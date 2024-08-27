import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import '../style/style.css'

const Edit = () => {
  return (
    <>
    <AdminNavbar/>
     <section className="container-lg py-5 mt-5">
        <div className="cartbreadcrubs d-flex my-4 justify-content-between align-items-center">
            <div className="d-flex">
              <Link className='nav-link me-3' to='/admin/page/'>Page</Link> / <p className='nav-link fw-bold ms-3'>Edit</p>
            </div>
            <div className="row w-50 p-0 g-1 ">
              <div className="col-10"><input type="text" className="w-100 searchinput ps-1 bk-secondary " placeholder='seach' /></div>
              <div className="col-2">
                  <button className="btn bk-secondary text-dark hover-blue">
                    <i className="bi bi-search"></i>
                  </button>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Edit