import React from 'react'
import Nav from '../components/Nav'
import Footer2 from '../components/Footer2'
import OrdenList from '../components/OrdenList'


const page = () => {
  return (
    <div className='w-full relative my-1 aspect-auto bg-inherit bg-cover bg-[#3C3C3C] flex flex-col'>
    <Nav/>
    <OrdenList/>
   
    <Footer2/>      
    </div>
  )
}

export default page
