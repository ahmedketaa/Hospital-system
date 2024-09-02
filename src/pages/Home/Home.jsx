import React from 'react'
import Header from '../../components/Header'
import SubNav from '../../components/SubNav'
import CustomDivWithCarousel from '../../components/Test'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'
import AppointmentSection from '../../components/bookAppointment'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
       
        <CustomDivWithCarousel />
        <SecondSection />
        <ThirdSection />
        <AppointmentSection/>
        <SubFooter />
        <Footer/>
    </div>
  )
}
