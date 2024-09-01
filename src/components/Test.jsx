import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './test.style.css';
import { Link } from 'react-router-dom';
import BorderText from '../reusableComponents/borderText';
import { faCalendarDays, faUserDoctor, faHouse, faFlask, faStethoscope } from '@fortawesome/free-solid-svg-icons';

function CustomDivWithSwiper() {
  return (
    <div className="custom-bordered-div">
      <div className="border-top-links">
        <Link to="#" className="nav-link active">Home</Link>
        <Link to="#" className="nav-link">Specialties</Link>
        <Link to="#" className="nav-link">Patient Services</Link>
        <Link to="#" className="nav-link">Healthcare Expert</Link>
        <Link to="#" className="nav-link">Facilities</Link>
        <Link to="#" className="nav-link">Blog</Link>
      </div>
    
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className='px-3' style={{ backgroundImage:"url(doctor-holding.png)" ,backgroundSize:"cover",objectFit:"cover"}}> 
            <div className="ms-5 mt-5 " >
                <div className="text ">
                    <h3>Welcome to 
                    Saifee Hospital</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi sequi blanditiis a repellat cum explicabo tenetur odio, et totam obcaecati sint iure tempora numquam similique doloremque autem corporis facilis.
                    </p>
                    <button className='btn' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"20px",color:"white"}}>show more</button>
                </div>
              
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-3' style={{ backgroundImage:"url(doctor-holding.png)" ,backgroundSize:"cover",objectFit:"cover"}}> 
            <div className="ms-5 mt-5 " >
                <div className="text ">
                    <h3>Welcome to 
                    Saifee Hospital</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi sequi blanditiis a repellat cum explicabo tenetur odio, et totam obcaecati sint iure tempora numquam similique doloremque autem corporis facilis.
                    </p>
                    <button className='btn' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"20px",color:"white"}}>show more</button>
                </div>
              
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-3' style={{ backgroundImage:"url(doctor-holding.png)" ,backgroundSize:"cover",objectFit:"cover"}}> 
            <div className="ms-5 mt-5 " >
                <div className="text ">
                    <h3>Welcome to 
                    Saifee Hospital</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi sequi blanditiis a repellat cum explicabo tenetur odio, et totam obcaecati sint iure tempora numquam similique doloremque autem corporis facilis.
                    </p>
                    <button className='btn' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"20px",color:"white"}}>show more</button>
                </div>
              
            </div>
        </SwiperSlide>
       
      </Swiper>
      <div className="border-bottom-links">
      <BorderText t1="BOOK AN" t2="APPOINTMENT" icon={faCalendarDays} />
      <BorderText t1="FIND A" t2="DOCTOR" icon={faUserDoctor} />
      <BorderText t1="BOOK A" t2="HOME TEST" icon={faHouse} />
      <BorderText t1="BOOK A" t2="LAB TEST" icon={faFlask} />
      <BorderText t1="BOOK HEALTH" t2="PACKAGE" icon={faStethoscope} />
      </div>
    </div>
  );
}

export default CustomDivWithSwiper;
