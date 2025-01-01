import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadingContent } from '../components/LoadingState';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import GoodsCarth from '../components/GoodsCarth';
import Footer from '../components/Footer';
import '../styles/additionalStyle.css'
import axios from 'axios';

const Page = () => {
    const {setIsLoading} = useContext(LoadingContent)
    const globalData = useSelector((state)=>state.globalReducer.cart)
    const subdatas = useSelector(state=>state.globalReducer.wishlist)
    const [subdata, setSubdata] = useState([])
    useEffect(() => {
      setIsLoading(true)
      const url = 'https://ecommerceserver24.vercel.app/product'
      axios.get(url).then((result)=>{
        setIsLoading(false)
        const Flashsale = result.data.result
        setSubdata(Flashsale)
      }).catch((erro)=>{
        setIsLoading(false)
      })
    
    }, [])
    const horizontaoScroll2 = useRef(null)
    const horizontaoScroll = useRef(null)
    const scrollLeft =()=>{ horizontaoScroll.current.scrollBy({
        top:0,
        left:-300,
        behavior:'smooth'
      })
    }
    const scrollRight =()=>{ horizontaoScroll.current.scrollBy({
      top:0,
      left:300,
      behavior:'smooth'
    })
  }
  const scrollLeft2 =()=>{ horizontaoScroll2.current.scrollBy({
    top:0,
    left:-300,
    behavior:'smooth'
  })
}
  const scrollRight2 =()=>{ horizontaoScroll2.current.scrollBy({
    top:0,
    left:300,
    behavior:'smooth'
  })
}
  return (
    <>
      <Navbar pageHome={true}/>
      <section className="container-lg pt-3">
        <div className="sectionTopPage row mb-5 justify-content-between">
          <div className="col-md-2 d-none d-md-block py-0" style={{borderRight:"solid thin black"}}>
            <ul className="nav-navbar p-0 m-0 mt-3">
              <li className="nav-item"><Link className='nav-link text-dark'>Woman's fasion</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Man's fasion</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Electronics</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Home & Lifestyle's</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Medicine</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Sports & Outdoor</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Baby’s & Toys</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Groceries & Pets</Link></li>
              <li className="nav-item"><Link className='nav-link text-dark'>Health & Beauty</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-9">
            <div className='page-carosel'>
              <div id="carouselId" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <ul className="carousel-indicators">
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="First slide"
                  ></li>
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                    aria-label="Second slide"
                  ></li>
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="2"
                    aria-label="Third slide"
                  ></li>
                </ul>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                  <div className="carosel-hoder b-red"></div>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Title</h3>
                      <p>Description</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carosel-hoder bg-dark"></div>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Title</h3>
                      <p>Description</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <div className="carosel-hoder b-blue"></div>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Title</h3>
                      <p>Description</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="b-red rounded-2 solid p-0 m-0"></div>
            <h2 className='tx-red h5 py-0 px-3 m-0'>Today's</h2>
          </div>
          <div className="my-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-end justify-content-between">
              <h2 className='d-none d-md-block'>Flash Sales</h2>
              <div className="d-flex ms-md-5">
                <div><smail className='fs-7'>Days</smail><h2 className='d-flex align-items-center'> 03 <span className="tx-red h2 mx-2"> : </span></h2></div> 
                <div><smail className='fs-7'>Hours</smail><h2 className='d-flex align-items-center'> 23 <span className="tx-red h2 mx-2"> : </span></h2></div> 
                <div><smail className='fs-7'>Minutes</smail><h2 className='d-flex align-items-center'> 19 <span className="tx-red h2 mx-2"> : </span></h2></div> 
                <div><smail className='fs-7'>Seconds</smail><h2 className='d-flex align-items-center'> 59 <span className="tx-red h2 mx-2"> . </span></h2></div>   
              </div>
            </div>
            <div className="d-flex g-2">
              <button className="btn b-blue mx-3 rounded-pill fs-4 d-flex justify-content-center align-items-center" onMouseDown={scrollLeft}><i className="bi bi-arrow-left"></i></button>
              <button className="btn b-blue rounded-pill fs-4 d-flex justify-content-center align-items-center" onMouseDown={scrollRight}><i className="bi bi-arrow-right"></i></button>
            </div>
         </div>
          <div className="container-lg scroll-x" ref={horizontaoScroll}>
            <div className="d-flex g-2">
              {subdata.map((item,index)=><div key={index} className="col-md-4 mx-2 col-6 col-lg-3">
                <GoodsCarth datas={item}/>
              </div>)}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
            <button className="btn btn-lg btn-outline-danger b-red rounded-1 text-light">View All Product</button>
          </div>
        </div>
        {/*  */}
        <hr  className='my-5'/>
        <div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="b-red rounded-2 solid p-0 m-0"></div>
            <h2 className='tx-red h5 py-0 px-3 m-0'>Category</h2>
          </div>
          <div className="my-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-end justify-content-between">
              <h2>Browse By Category</h2>
            </div>
            <div className="d-flex g-2">
              <button className="btn b-blue mx-3 rounded-pill fs-4 d-flex justify-content-center align-items-center" onClick={scrollLeft2}><i className="bi bi-arrow-left"></i></button>
              <button className="btn b-blue rounded-pill fs-4 d-flex justify-content-center align-items-center" onClick={scrollRight2}><i className="bi bi-arrow-right"></i></button>
            </div>
         </div>
          <div className="container-lg scroll-x" ref={horizontaoScroll2}>
            <div className="d-flex fit-content m-auto justify-content-center scroll-x" >
              {/* {subdata.map((item,indes)=><div className="col-md-4 mx-2 col-6 col-lg-3">
                <GoodsCarth key={indes} datas={item}/>
              </div>)} */}
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-watch fs-1"></i>
                  <p className='pt-2'>Watch</p>
                </div>
              </Link>
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-phone fs-1"></i>
                  <p className='pt-2'>phone</p>
                </div>
              </Link>
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-headset fs-1"></i>
                  <p className='pt-2'>Headphones</p>
                </div>
              </Link>
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-camera fs-1"></i>
                  <p className='pt-2'>Camera</p>
                </div>
              </Link>
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-laptop fs-1"></i>
                  <p className='pt-2'>Computer</p>
                </div>
              </Link>
              <Link className="card nav-link text-center categoty-card py-2 mx-2">
                <div>
                  <i className="bi bi-tv fs-1"></i>
                  <p className='pt-2'>TV</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <hr  className='my-5'/>
        {/*  */}
        <div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="b-red rounded-2 solid p-0 m-0"></div>
            <h2 className='tx-red h5 py-0 px-3 m-0'>This Month</h2>
          </div>
          <div className="my-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-end justify-content-between">
              <h2>Best Selling Products</h2>
             
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <button className="btn  btn-outline-danger b-red rounded-1 text-light">View All </button>
            </div>
         </div>
          <div className="container-lg scroll-x" >
            <div className="row g-4">
              {subdata.map((item,index)=><div key={index} className="col-md-3 col-6">
                <GoodsCarth datas={item}/>
              </div>)}
            </div>
          </div>
          
        </div>
        {/*  */}
        <div>
          <div className="d-flex justify-content-start align-items-center">
            <div className="b-red rounded-2 solid p-0 m-0"></div>
            <h2 className='tx-red h5 py-0 px-3 m-0'>Our Products</h2>
          </div>
          <div className="my-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-end justify-content-between">
              <h2>Explore Our Products</h2>
             
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <button className="btn btn-lg btn-outline-danger b-red rounded-1 text-light">View All Product</button>
            </div>
         </div>
          <div className="container-lg scroll-x">
            <div className="row g-4">
              {subdata.map((item,index)=><div key={index} className="col-md-3 col-6">
                <GoodsCarth  datas={item}/>
              </div>)}
              {subdata.map((item,index)=><div key={index} className="col-md-3 col-6 ">
                <GoodsCarth datas={item}/>
              </div>)}
            </div>
          </div>
          
        </div>
      </section>
      <Footer/>
    </>

  )
}

export default Page