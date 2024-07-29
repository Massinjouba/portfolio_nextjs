import React, { useState } from 'react'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
import { SKILLS } from '../../utils/data'

const Skills = () => {

  const [slectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className='skills-container' id='section2'>
        <h5>Technical Profeciency</h5>
        <div className='skills-content'>
            <div className='skills'>
              {SKILLS.map((item)=>(
                <SkillCard
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={slectedSkill.title === item.title}
                  onClick={()=> {
                    handleSelectSkill(item);      
                  }}  
                />
              ))}
            </div>
            <div className='skills-info'>
                <SkillsInfoCard
                heading={slectedSkill.title}
                skills={slectedSkill.Skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills
