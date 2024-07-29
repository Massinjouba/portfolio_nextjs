import React, { useRef } from 'react';
import Slider from 'react-slick';
import { PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Projects = () => {
    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = () => {
        slideRef.current.slickNext();
    };

    const slideLeft = () => {
        slideRef.current.slickPrev();
    };

    return (
        <section className='projects-container' id='section3'>
            <h5>Projects</h5>
        
            <div className='projects-content'>
                <div className='arrow-right' onClick={slideRight}>
                    <ChevronRightIcon />
                </div>
                <div className='arrow-left' onClick={slideLeft}>
                    <ChevronLeftIcon />
                </div>
                <Slider ref={slideRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
