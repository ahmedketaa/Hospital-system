import React from 'react'

export default function SubFooter() {
  return (
    <div className='' style={{backgroundColor:"#D9D9D9",marginTop:"130px"}}>
       <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-3 " style={{transform:"translateY(-50px)"}}>
                <div className="rounded-circle position-relative" style={{backgroundColor:"#222F66",width:"250px",height:"250px"}}>
                        <img src="/dun.png"  style={{transform:"translateY(-50px)"}} className='w-100 ' alt="" />
                    </div>
                </div>
           
                    <div className="text m-5" >
                        <h4 style={{color:"#222F66"}}>Make Appointment</h4>
                        <p className='text-white'>Looking for professinal & trusted 
                        medical healthcare?</p>
          <button className='btn mb-2' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"20px",color:"white"}}>
            Make Appointment</button>

                    </div>
            </div>
        </div>
       </div>
  )
}
