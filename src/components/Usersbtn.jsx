import React, { useContext } from 'react'
import '../styles/additionalStyle.css'
import { LoadingContent } from './LoadingState'

const Usersbtn = ({icon,signal,active}) => {
    const {setIsLoading} = useContext(LoadingContent)
    
  return (
    <button className={active?"btn px-2 fw-bolder py-1 btn-outline-dark rounded rounded-pill userbtn":"btn px-2 fw-bolder py-1  rounded rounded-pill userbtn "} onClick={()=>(setIsLoading(true))}>
        <i className={icon}></i>
        {signal.status && <span className='rounded fw-light text-light fs-6 rounded-pill'>{signal.nub}</span>}
    </button>
  )
}

export default Usersbtn