import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Element1 from '@/components/ProjectsElement/Element1/Element1';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/Popup/Popup';

const Projet1 = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup} />
      <div className='container'>
        <Element1 />
      </div>
      <Footer />
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
};

export default Projet1;
