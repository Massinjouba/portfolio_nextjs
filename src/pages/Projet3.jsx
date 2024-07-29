import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Element3 from '@/components/ProjectsElement/Element3/Element3';
import Footer from '@/components/Footer/Footer';
import Popup from '@/components/Popup/Popup';

const Projet3 = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup} />
      <div className='container'>
        <Element3 />
      </div>
      <Footer />
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
};

export default Projet3;
