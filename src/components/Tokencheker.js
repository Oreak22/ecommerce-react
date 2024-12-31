import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Tokencheker = () => {
    const navigate = useNavigate()
    useEffect(() => {
        
        const url = 'https://ecommerceserver24.vercel.app/user/validate'
        if(JSON.parse(localStorage.exclusive)){
            const token = JSON.parse(localStorage.exclusive).Session_token
            axios.get(url,{headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }}).then((res)=>{
                if(res.data.status){
                    console.log('legal')
                }else{
                    localStorage.clear('exclusive')
                    navigate('/signin')
                }
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            // alert(JSON.parse(localStorage.exclusive).Session_token)
            navigate('/signin')
        }
        
        
      
    }, [])
    
  return (
    <></>
  )
}

export default Tokencheker