import React from 'react'
import CustomDivWithCarousel from '../../components/Test'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'
import AppointmentSection from '../../components/bookAppointment'

export default function Home() {
  return (
    <div>
       
        <CustomDivWithCarousel />
        <SecondSection />
        <ThirdSection />
        <AppointmentSection/>
     
    </div>
  )
}
