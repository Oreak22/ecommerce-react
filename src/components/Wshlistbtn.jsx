import axios from 'axios'
import React, { useState } from 'react'
import { RemoveWishlist } from '../additionalScript/script'

const Wshlistbtn = ({productName,productId,productPic,orderQuantity,productPrice}) => {
    const [wishlisted, setWishlisted] = useState(false)
    const wishlist=()=>{
        const url ='https://ecommerceserver24.vercel.app/order/wishlist'
        // const detail = {productName,productId,productPic,orderQuantity:1,costumerId:JSON.parse(localStorage.exclusive).account_id}
        axios.post(url,{productName,productId,productPic,orderQuantity:1,costumerId:JSON.parse(localStorage.exclusive).account_id,productPrice}).then((res)=>{
            console.log(res)
            if(res.data.status){
                setWishlisted(true)
            }else if(res.data.message == 'Already wishlisted'){
                console.log('nope')
                if(window.confirm(`Do you want remove from wishlist?`)){
                    // RemoveWishlist(res.data.id)
                    const url = 'https://ecommerceserver24.vercel.app/order/removeWishlist'
                    const _id = {'_id':res.data.id}
                    axios.post(url,_id).then((res)=>{
                        console.log(res.data)
                    }).catch((err)=>{
                        console.log(err)
                        return;
                    })
                    setWishlisted(false)
                }
            }
        }).catch((err)=>{
            console.log(err)
        })
    } 



  return (
    <button className="btn btn-light rounded rounded-pill text-dark py-1 px-2" title='Add to Wishlist' onClick={wishlist}><i className={wishlisted?"bi bi-heart-fill":"bi bi-heart"}></i></button>
  )
}

export default Wshlistbtn