import React from 'react'
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import DoctorCard from './doctorCard';

export default function SecondSection() {
  return (
    <div>
        <div className="py-5 d-flex flex-column gap-3 text-center justify-content-center align-items-center">
                <div className="text-center w-75 d-flex flex-column justify-content-center align-items-center">
                    <h3 style={{color:"#222F66"}}>OUR CENTRES OF <span className='' style={{color:"#DEAA4E"}}>EXCELLENCE</span></h3>
                   <div className='d-flex justify-content-center align-items-center text-center'>
                   <p className='my-2' style={{color:"#606060",fontFamily:"arial",width:"60%",textAlign:"center",margin:"auto",fontSize:"14px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ultrices sed adipiscing malesuada aliquam nisl fusce sit. Scelerisque suspendisse feugiat lectus nulla ullamcorper porttitor purus enim. Volutpat mattis amet semper volutpat odio. Risus faucibus interdum volutpat nibh venenatis.
                    </p>
                   </div>
            </div>
            <div className="container ">
                <div className="row g-2 gap-4">
                    <div className="col-md-1"></div>
                  <DoctorCard src={'doctor1.png'} text={'Cardiology Center of Excellence'} />
                  <DoctorCard src={'doctor2.png'} text={'General Surgery Center of Excellence'} />
                  <DoctorCard src={'doctor3.png'} text={'Paediatric Center of Excellence'} />
                </div>
            </div>
        </div>
    </div>
  )
}
