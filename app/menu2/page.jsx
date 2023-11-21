import React from 'react'
import Nav from '../components/Nav'
import Footer2 from '../components/Footer2'
import SectionMenu from './components/SectionMenu'
import BannerNegocio from './components/BannerNegocio'

const page = () => {
  return (
    <div className='flex bg-inherit relative flex-col'>
        <Nav/>
        <BannerNegocio/>
        <SectionMenu/>
        <Footer2/>
    </div>
  )
}

export default page