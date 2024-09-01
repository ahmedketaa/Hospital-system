import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function FooterCard({icon, t1, t2}) {
  return (
    <div className="text-center py-4" style={{ backgroundColor: '#222F66', border:"1px solid #053B8C"}}>
    <div className='px-5'>
        <div className="d-flex gap-3 justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center p-2" style={{backgroundColor:"#053B8C"}}>
                <FontAwesomeIcon size='2x' icon={icon} />
            </div>
            <div className="text w-100">
                <h4 className='h6 mb-1'>{t1}</h4>
                <span style={{color:"#D9D9D9",width:"100%"}}>{t2}</span>
            </div>
        </div>
    </div>
  </div>
  )
}
