import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { LoadingContent } from './LoadingState'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const AddToCarthBtn = ({productName,productId,productPic,orderQuantity,productPrice,add}) => {
  const {setIsLoading} = useContext(LoadingContent)
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false)
    const [message, setMessage] = useState('')
    const [toastStatus, setToastStatus] = useState()
    const [incart, setIncart] = useState( add ? true : false)
    const add2cart = {
      productName,
      productId,
      productPic,
      productPrice,
      orderQuantity:!orderQuantity?1:orderQuantity,
      costumerId:JSON.parse(localStorage.exclusive).account_id || null
    }
    const add2myCart = ()=>{
      if (!JSON.parse(localStorage.exclusive)) return
      const url = 'https://ecommerceserver24.vercel.app/order/add2cart'
      axios.post(url,add2cart).then((res)=>{
        setMessage('Added To Cart')
        setToastStatus(true)
        setIncart(true)
        setShow(true)
      }).catch((err)=>{
        setMessage('Failed To Add Cart')
        setToastStatus(false)
        // setIsLoading(false)
        setShow(true)
      })
    }
    const activateToast =()=>{
      setToggle(true)
    }
    useEffect(() => {
     
      
      // console.log(productId)
    }, [])
    
  return (
    <>
      <button  className="btn btn-dark w-100" disabled={ incart && true} onClick={add2myCart}>{incart?'Added To Cath':'Add To Cart'} <i className='bi bi-cart'></i></button>
      <Row>
      {/* <Button className="btn btn-dark w-100" onClick={add2myCart}>Add To Cart <i className='bi bi-cart'></i></Button> */}
        <Col xs={6}>
        <Toast className='fixed-top' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body className={toastStatus?'bg-success text-light text-center':'bg-danger text-light text-center'}>{message}</Toast.Body>
        </Toast>
        </Col>
        <Col xs={6}>
        </Col>
      </Row>
    </>
  )
}

export default AddToCarthBtn