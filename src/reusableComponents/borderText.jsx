import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BorderText({t1,t2 ,icon}) {
  return (
    <div className='px-5 py-1' style={{borderRadius:"15px",backgroundColor:"#F8F8F8",color:"#D8B36A",position:"relative",fontFamily:"arial"}}>
    <span style={{margin:"0",padding:"0",display:"block",fontSize:"13px"}}>{t1} </span>
    <span style={{margin:"0",padding:"0",display:"block",fontSize:"13px"}}>{t2}</span>
    <span className='text-center' style={{position:"absolute",top:"-10px",left:"0",border:"1px solid white", borderRadius:"50%", width:"30px",height:"30px",backgroundColor:"#D8B36A",color:"white"}}>
    <FontAwesomeIcon icon={icon} className="icon" />
    </span>
    </div>
  )
}
