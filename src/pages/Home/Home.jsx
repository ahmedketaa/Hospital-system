import React from 'react'
import Header from '../../components/Header'
import SubNav from '../../components/SubNav'
import CustomDivWithCarousel from '../../components/Test'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'

export default function Home() {
  return (
    <div>
        <Header/>
        <SubNav />
        <CustomDivWithCarousel />
        <SecondSection />
        <ThirdSection />
    </div>
  )
}
