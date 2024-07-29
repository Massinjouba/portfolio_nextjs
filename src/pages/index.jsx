import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Description from '@/components/Description/Description';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import Popup from '@/components/Popup/Popup.jsx'

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup}/>
      <div className='container'>
        <Description/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default App
