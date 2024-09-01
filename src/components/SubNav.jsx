import React from 'react'
import { Link } from 'react-router-dom'
import './test.style.css';
export default function SubNav() {
  return (
    <div className='subNav d-flex justify-content-evenly align-items-center py-3 px-4'>
        <div className="logo">
            <img src="/Saifee-Logo.png" alt="" />
        </div>
        <div>
            <div className="d-flex gap-4 justify-content-center align-items-center">
                <Link className="nav-link d-flex gap-3">
                    <img src="phone.png" alt="" />
                    <span>0123456789</span>
                </Link>
                <button className='d-flex justify-content-center align-items-center gap-3 rounded-5 bg-white px-3 py-2' style={{border:"2px solid #222F66",outline:"none"}}>
                    <img src="calender.png" alt="" />
                    Book Appointment
                </button>
            </div>
        </div>
    </div>
  )
}
