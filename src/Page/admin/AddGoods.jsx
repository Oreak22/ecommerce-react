import React, { useContext, useEffect, useState } from 'react'
import AdminNavbar from './AdminComponent/AdminNavbar'
import { Link } from 'react-router-dom'
import { LoadingContent } from '../../components/LoadingState'
import Discription from './AdminComponent/Discription'
import gp from '../admin/img/gamepad.png'
import gp1 from '../admin/img/pd_1.png'
import gp2 from '../admin/img/gp_2.png'
import gp3 from '../admin/img/gp_3.png'
import gp4 from '../admin/img/gp_4.png'
import axios from 'axios'

const AddGoods = () => {
    const {setIsLoading} = useContext(LoadingContent)
    const [main_pic, setMain_pic] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState(null)
    const [img4, setImg4] = useState(null)
    const [goodsname, setgoodsname] = useState()
    const [price, setPrice] = useState()
    const [discount, setDiscount] = useState()
    const [size, setSize] = useState(['r'])
    const [qauntity, setQauntity] = useState()
    const [color, setColor] = useState([])
    const [discription, setDiscription] = useState()
    const [rating, setrating] = useState()
    const [colorstate, setColorstate] = useState()
    const [res, setRes] = useState({status:false,'message':''})
    const [allowed, setAllowed] = useState(false)
    useEffect(() => {
      
        setIsLoading(false)
    
      
    }, [])
    const goodsDetail={
        'goodsname':goodsname,
        'price':price,
        'discount': discount,
        'color': color,
        'discription': discription,
        'size':size,
        'qauntity':qauntity,
        'rating':rating,
        'pic':{'fullView': main_pic, 'otherView':[img1,img2, img3 && img3,img4 && img4]}
    }
    const handleFile =({e,setimg})=>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend=()=>{
            setimg(reader.result)
        }
        reader.readAsDataURL(file)

    }
    const handlecolr=()=>{
        setColor([...color,colorstate])
        setColorstate('')
    }

    const handlesize=(i)=>{
        const newsize = i.target.value
        const check = size.find((item,index)=>item==newsize)
        console.log(check)
        if(!check){
            setSize([...size,newsize])
        }
        return
   }
    const handleremovesize=(i)=>{
        setSize(size.filter((item,index)=>index!==i))
    }
    const handleSubmit=()=>{
        if(goodsname && price && discount && discription && color.length >= 1 && size.length >= 1 && qauntity && rating && main_pic && img1 && img2 ){
        }else{
        }
    }
    const pushProduct=()=>{
        setIsLoading(true)
        const url= 'http://localhost:5000/admin/pushproduct'
        axios.post(url,goodsDetail).then((res)=>{
            setRes({message:res.data.message,status:res.data.status})
            if(res.data.status){
                emty()
            }
            setIsLoading(false)
        }).catch((err)=>{
            setRes({status:false,message:'Check your network connection'})
            setIsLoading(false)
        })
    }
    const emty =()=>{
        setMain_pic('')
        setImg1('')
        setImg2('')
        setImg3('')
        setImg4('')
        setgoodsname('')
        setPrice('')
        setDiscount('')
        setSize(['r'])
        setQauntity('')
        setColor([])
        setDiscription('')
        setrating('')
        setColorstate('')
    }
    //    console.log(check)
    
    const protentialSize=['sm','m','lg','xl','xxl']
    useEffect(() => {
        if(goodsname && price && discount && discription && color.length >= 1 && size.length >= 1 && qauntity && rating && main_pic && img1 && img2 ){
            setAllowed(false)
        }else{
            setAllowed(true)
        }
    
      
    }, [goodsname, price, discount, discription, color.length , size.length, qauntity, rating, main_pic, img1, img2])
    
  return (
    <>
    <AdminNavbar/>
        <section className="container-lg py-5 mt-5">
            <div className="cartbreadcrubs d-flex my-4 justify-content-between align-items-center">
                <div className="d-flex">
                        <Link className='nav-link me-3' to='/admin/page/'>Page</Link> / <p className='nav-link fw-bold ms-3'>Add2Goods</p>
                    </div>
                </div>
            <div className="row py-5 pt-0 px-2">
                <div className="col-md-4" style={{height:'80dvh',overflowY:'scroll'}}>
                    <h3 className='p-0 mx-0 mb-3'>Add Product Details</h3>
                    <div>
                        <div className="addPic">
                            <div className="row justify-content-center">
                               <div className="col-md-12">
                               <label htmlFor="Main_pic" className='fw-bold mb-3 p-3 justify-content-center d-flex align-items-center rounded-start-2 lh-4' style={{border:'Solid thin black',}}>
                                   <div> <div className="rounded-2 mx-auto p-0 my-0 justify-content-center d-flex align-items-center" style={{height:'3rem',width:'3rem',border:'solid thin black'}}>
                                        <i className="bi bi-plus m-0 p-0 h3"></i>
                                    </div>
                                    Add Main Product Pic</div>
                                </label>
                                <input type="file" className="d-none" id="Main_pic" onChange={(e)=>handleFile({e,setimg:setMain_pic})}/>
                               </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="w-50">
                                        <label htmlFor="img1" className='fw-bold mb-3 p-3 text-center  lh-4' style={{border:'Solid thin black'}}>
                                            <div className="rounded-2 mx-auto p-0 my-0 justify-content-center d-flex align-items-center" style={{height:'3rem',width:'3rem',border:'solid thin black'}}>
                                                <i className="bi bi-plus m-0 p-0 h3"></i>
                                            </div>
                                            img-1
                                        </label>
                                        <input type="file" className="d-none" id="img1" onChange={(e)=>handleFile({e,setimg:setImg1})}/>
                                    </div>
                                    <div className="w-50">
                                        <label htmlFor="img2" className='fw-bold mb-3 p-3 text-center  lh-4' style={{border:'Solid thin black'}}>
                                            <div className="rounded-2 mx-auto p-0 my-0 justify-content-center d-flex align-items-center" style={{height:'3rem',width:'3rem',border:'solid thin black'}}>
                                                <i className="bi bi-plus m-0 p-0 h3"></i>
                                            </div>
                                            img-2
                                        </label>
                                        <input type="file" className="d-none" id="img2" onChange={(e)=>handleFile({e,setimg:setImg2})}/>
                                    </div>
                                    <div className="w-50">
                                        <label htmlFor="img3" className='fw-bold mb-3 p-3 text-center  lh-4' style={{border:'Solid thin black'}}>
                                            <div className="rounded-2 mx-auto p-0 my-0 justify-content-center d-flex align-items-center" style={{height:'3rem',width:'3rem',border:'solid thin black'}}>
                                                <i className="bi bi-plus m-0 p-0 h3"></i>
                                            </div>
                                            img-3
                                            <input type="file" className="d-none" id="img3" onChange={(e)=>handleFile({e,setimg:setImg3})}/>
                                        </label>
                                    </div>
                                    <div className="w-50">
                                        <label htmlFor="img4" className='fw-bold mb-3 p-3 text-center  lh-4' style={{border:'Solid thin black'}}>
                                            <div className="rounded-2 mx-auto p-0 my-0 justify-content-center d-flex align-items-center" style={{height:'3rem',width:'3rem',border:'solid thin black'}}>
                                                <i className="bi bi-plus m-0 p-0 h3"></i>
                                            </div>
                                            img-4
                                        </label>
                                        <input type="file" className="d-none" id="img4" onChange={(e)=>handleFile({e,setimg:setImg4})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="alert alert-secondary text-center">
                                <span className="fw-bold">Note: </span>
                                Upload a main picture of the goods and a minimum of 2 sub picture 
                            </div>
                        </div>
                        <div className="">
                            <div className=''>
                                <label htmlFor="" className='fw-bold'>Goods Name:</label>
                                <input type="text" className='form-control text-capitalize' value={goodsname} placeholder='Enter Product Name' onChange={(e)=>setgoodsname(e.target.value)}/>
                            </div>
                           <div className="row">
                                <div className='col-md-3'>
                                    <label htmlFor="" className='fw-bold'>Goods Price:</label>
                                    <input type="number" className='form-control' placeholder='Price ' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                </div>
                                <div className='col-md-3'>
                                    <label htmlFor="" className='fw-bold'>Goods Discount:</label>
                                    <input type="number" className='form-control' placeholder='Discount percentage' value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
                                </div>
                                <div className='col-md-3'>
                                    <label htmlFor="" className='fw-bold'>Goods Quanity:</label>
                                    <input type="number" className='form-control' placeholder='Quantity ' value={qauntity} onChange={(e)=>setQauntity(e.target.value)}/>
                                </div>
                                <div className='col-md-3'>
                                    <label htmlFor="" className='fw-bold'>Goods Ratings:</label>
                                    <input type="number" className='form-control' placeholder='Rate over 5 ' value={rating} max={5} min={1} onChange={(e)=>setrating(e.target.value)}/>
                                </div>
                           </div>
                            <div>
                                <label htmlFor="" className='fw-bold'>Goods Discription:</label>
                               <textarea name="" id="" rows='6' className='form-control' value={discription} onChange={(e)=>setDiscription(e.target.value)}></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className="fw-bold">Available color of goods</label>
                                <div className="d-flex align-items-center">
                                   <label htmlFor="" className='me-3'> color: </label>
                                     <input  type="text" placeholder='Enter color (eg red or #f5f5f5)' value={colorstate} onChange={(e)=>setColorstate(e.target.value)} id='colorText'/>
                                     <span className="mx-2">or</span>
                                     <input type="color" value={colorstate} className='me-3'  onChange={(e)=>setColorstate(e.target.value)}/>
                                   {colorstate && <button className="btn btn-dark rounded-1" onClick={handlecolr}>Add Color</button>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className="fw-bold">Available size of goods</label>
                                <div className="">

                                   <label htmlFor="" className='me-3'> size: </label>
                                   <div className="d-flex my-3">
                                    {size.map((item,index)=> <button className='rounded-pill btn btn-outline-danger mx-2 shadow-sm text-uppercase' title={'Remove '+ item} key={index} onClick={()=>handleremovesize(index)}>{item}</button>)}
                                   </div>
                                        <select name="" id="" className='mb-3 form-control' onChange={(i)=>handlesize(i)}>
                                            <option value='r' className="text-success">R</option>                                            
                                            {protentialSize.map((item,index)=><option value={item} className="text-success">{item}</option>)}
                                        </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <button type="button" class="btn btn-outline-success w-100" data-bs-toggle="modal" disabled={!allowed?false:true} data-bs-target="#staticBackdrop" >
                            Add Goods
                        </button>
                    </div>
                </div>
                <div className="col-md-8">
                <div className="d-flex justify-content-center algin-item-center">
                {
                    res.message ? res.status ? <div className="alert alert-success text-center w-100 py-2">
                        {res.message}
                    </div> : <div className="alert alert-danger text-center w-100 py-2">
                        {res.message}
                        </div>:''
                }
            </div>
                    <h3 className='p-0 mx-0 mb-3'>Preview</h3>
                    <Discription discription={goodsDetail} admin={true}/>
                </div>
            </div>

            
        </section>


       

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Make sure all things aare in good order, product will be displayed to customers as shown here. <br />
                Are you sur you want to submit?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={pushProduct}>Understood</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default AddGoods