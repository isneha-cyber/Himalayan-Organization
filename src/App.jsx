import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/Backtotop'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutOrganization from './Pages/AboutOrganization'
import HistoryPage from './Pages/HistoryPage'
import CorporateProfilePage from './Pages/Corporateprofilepage'
import WhoWeArePage from './Pages/WhoWeArePage'
import HowWeWorkPage from './Pages/HowweWork'
import FAQPage from './Pages/FAQPage'
import CareerPage from './Pages/CareerPage'
import { AgriculturePage } from './Pages/AgriculturePage'
import { RealEstatePage } from './Pages/RealEstatePage'
import { HospitalityPage } from './Pages/HospitalityPage'
import { BankingPage } from './Pages/BankingPage'
import { EngineeringPage } from './Pages/EngineeringPage'
import { AutoMobilePage } from './Pages/AutoMobilePage'
import ChairmanPage from './Pages/ChairmanPage'
import Blog from './Pages/Blog'
import ContactPage from './Pages/ContactPAge'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <BackToTop/>
       
        <Routes>
          {/* Only one route for root path */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-organization" element={<AboutOrganization />} />
          <Route path="/organization-history" element={<HistoryPage />} />
          <Route path="/corporate-profile" element={<CorporateProfilePage/>} />
          <Route path="/who-we-are" element={<WhoWeArePage/>} />
          <Route path="/how-we-work" element={<HowWeWorkPage/>} />
          <Route path="/faq" element={<FAQPage/>} />
          <Route path="/message-from-chairman" element={<ChairmanPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/engineering" element={<EngineeringPage/>} />
          <Route path="/auto-mobile" element={<AutoMobilePage/>} />
          <Route path="/agriculture" element={<AgriculturePage/>} />
          <Route path="/real-estate" element={<RealEstatePage/>} />
          <Route path="/hospitality" element={<HospitalityPage/>} />
          <Route path="/banking" element={<BankingPage/>} />
          <Route path="/blog" element={<Blog/>} />
          

        
        </Routes>
        <Footer/>
       
      </BrowserRouter>
    </>
  )
}

export default App
