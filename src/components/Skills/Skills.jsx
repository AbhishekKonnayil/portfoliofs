import { useContext } from 'react';
import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {

    const { theme } = useContext(ThemeContext);


    return (
        <div className="flex flex-col" style={{ backgroundColor: theme.secondary }}>
            <h2 className='heading' style={{ color: theme.primary }}>Skills</h2>
            <div className="w-full items-center justify-start ">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView='auto'
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={8000}
                    allowTouchMove={true}
                    grabCursor={true}
                >
                    {skillsData.map((skill, id) => (
                        <SwiperSlide className='!w-auto ' key={id}>
                            <div
                                className="group w-[160px] h-[160px] mt-4 rounded-[10px] flex flex-col items-center justify-center  
                                    border border-[#E9AD35] transition-all duration-300 relative
                                            hover:scale-105 hover:shadow-xl cursor-pointer">
                                <img className="h-[50px]" src={skillsImage(skill)} alt={skill} />
                                <h3
                                    className="font-exo font-medium transition-colors duration-300 group-hover:text-[#E9AD35]"
                                    style={{ color: theme.tertiary }}
                                >
                                    {skill}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

export default Skills
