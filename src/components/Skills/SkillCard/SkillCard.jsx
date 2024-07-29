import React from 'react';
import Image from 'next/image';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div className={`skills-card ${isActive ? 'active' : ''}`}
         onClick={() => onClick()}>
      <div className='skill-icon'>
        <Image src={iconUrl} alt={title} width={50} height={50} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
