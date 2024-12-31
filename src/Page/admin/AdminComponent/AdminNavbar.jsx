import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadingContent } from '../../../components/LoadingState'
import Usersbtn from '../../../components/Usersbtn'
// import '...../styles/additionalStyle.css'

const AdminNavbar = ({pageHome,pageContact,pageAbout,pageSign, account}) => {
    const [navopen, setnavopen] = useState(false)
    const [profle, setProfle] = useState({status:false,nub:''})
    const {setIsLoading} = useContext(LoadingContent)
    const [navClass, setNavClass] = useState(
        {
            navbar_nav:"col-md-4 mt-3 d-md-block d-none",
            navbar_search:"col-md-5 col-10 d-none d-md-block"
        }
    )
    const toOtherPage = ()=>{
        setIsLoading(true)
    }

    const handlenav=()=>{
        if(navopen){
            setnavopen(false)
            setNavClass({
                navbar_nav:"col-md-4 mt-3 d-md-block d-none",
                navbar_search:"col-md-3 col-10 d-none d-md-block"
            })
        }else{
            setnavopen(true)
            setNavClass({
                navbar_nav:"col-md-4 mt-3 d-md-block d-block",
                navbar_search:"col-md-3 col-10 d-block d-md-block"
            })
        }
    }
  return (
    <nav className='fixed-top w-100 bg-light'>
        <div className="container-lg py-md-2 py-4">
            <div className="row justify-content-center justify-content-md-between align-items-baseline">
                <div className="col-md-2 ">
                    <div className="d-flex justify-content-between">
                        <Link className=' m-0 navbar-brand fw-bolder text-center lh-1 fs-3' to='/admin/page'>Exclusive <br /> <span className='fw-light fs-3'>Admin</span></Link>
                        <button className="btn d-block d-md-none bg-black tx-secondary hover-blue" onClick={handlenav}>{navopen?(<i className="bi bi-three-dots"></i>):(<i className="bi bi-three-dots-vertical"></i>)}</button>
                    </div>
                </div>
               
                <div className={navClass.navbar_nav } id='navbar_nav'>
                    <h3 className='d-md-none px-4'>Navigate</h3>
                    <ul style={{'lineHeight':"2.5rem"}} className="d-md-flex justify-content-evenly align-items-center">
                        <li className="nav-item">
                            <Link to='/admin/page/Addgoods' className={pageHome?'active nav-link':'nav-link '} onClick={toOtherPage}>Add2Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageContact?'active nav-link':'nav-link '} onClick={toOtherPage}>Edit/Remove</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageAbout?'active nav-link':'nav-link '} onClick={toOtherPage}>Ads</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pageSign?'active nav-link text-danger':'nav-link text-danger'} to='/admin/signin' onClick={toOtherPage}>Log-Out</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 d-none d-lg-block">
                    <Link to='/admin/page/editgoods'>
                    
                            <div className="row  p-0 g-1 ">
                                <div className="col-10"><input type="text" className="w-100 ps-1 bk-secondary " placeholder='seach' /></div>
                                <div className="col-2">
                                    <button className="btn bk-secondary text-dark hover-blue">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default AdminNavbar