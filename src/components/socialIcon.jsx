import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialIcon({icon,color}) {
  return (
    <Link to="https://facebook.com" className="nav-link me-2 d-flex justify-content-center align-items-center" style={{border:`1px solid ${color}`, borderRadius:"50%", width:"30px",height:"30px", color:color}}>
       <i className={"fab" +" "+ icon}></i>
        </Link>
  )
}
