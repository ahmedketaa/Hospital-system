import React from 'react'

export default function DoctorCard({src,text, 'data-aos': dataAos}) {
  return (
    <div className="col-md-3" data-aos={dataAos}>
    <div className='position-relative'>
        <div className="image">
            <img className='w-100 rounded-4' src={src} alt="" />
        </div>
        <div style={{bottom:"-15px" , left:'5px'}} className='shadow bg-white px-4 py-2  position-absolute rounded text-center'>
        <h6 className='text-center ' style={{color:"#222F66",fontFamily:"arial",fontSize:"15px"}}>{text}</h6>
        </div>
     </div>
    </div>
  )
}
