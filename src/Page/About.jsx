import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadingContent } from '../components/LoadingState';

const About = () => {
    const {setIsLoading} = useContext(LoadingContent)

    const toOtherPage = ()=>{
        setIsLoading(true)
    }

      
  return (
    <nav>
      <ul>
        <li><Link to="/" onClick={toOtherPage}>Home</Link></li>
        <li><Link to="/about" onClick={toOtherPage}>About</Link></li>
        {/* Additional navigation links */}
      </ul>
      {}
    </nav>
  )
}

export default About