import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Discription from './admin/AdminComponent/Discription'
import axios from 'axios'
import { LoadingContent } from '../components/LoadingState'
import Footer from '../components/Footer'

const DiscriptionPage = () => {
    const [goodsbd, setgoodsbd] = useState()
    const {setIsLoading} = useContext(LoadingContent)
    useEffect(() => {
        setIsLoading(true)
        const getSearchParam=()=>{
            const param = new URLSearchParams(window.location.search)
            const queryParam ={}
            for (const [key, value] of param.entries()){
                queryParam[key]=value
            }
            return(queryParam)
        }
        console.log(getSearchParam().id)
        const _id = {goods_Id:getSearchParam().id}
        const url = 'https://ecommerceserver24.vercel.app/oneproduct'
        axios.get(url,{headers:_id}).then((res)=>{
            setgoodsbd(res.data.result)
            setIsLoading(false)
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    
    
    return (
        <>
        <Navbar />
        <div className="container-xl my-3">
            {goodsbd && <Discription discription={goodsbd} admin={false}/>}

        </div>
        <Footer/>
    </>
  )
}

export default DiscriptionPage