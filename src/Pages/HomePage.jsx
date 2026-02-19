import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Sector from '../components/Sector'
import Message from '../components/Message'
// import Successstories from '../components/Sucessstories'
import Blogs from '../components/Blog'


const HomePage = () => {
  return (
   <>
   <Hero/>
     <About/>
     <Sector/>
     <Message/>
     {/* <Successstories/> */}
     <Blogs/>

   </>
  )
}

export default HomePage