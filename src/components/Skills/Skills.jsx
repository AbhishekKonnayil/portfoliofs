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
            <div className="w-full items-center justify-start overflow-x-hidden ">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView="auto"
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
                        <SwiperSlide key={id} className="!w-auto">
                            {/* Padded wrapper to prevent clipping */}
                            <div className="p-2"> {/* or p-3 if more room is needed */}
                                <div
                                    className="group w-[160px] h-[160px] rounded-[10px] flex flex-col items-center justify-center  
          border border-[#88D9CF] transition-all duration-300 relative 
          hover:scale-105 active:scale-105 hover:shadow-xl cursor-pointer z-10  "
                                >
                                    <img className="h-[50px]" src={skillsImage(skill)} alt={skill} />
                                    <h3 className="font-exo font-medium transition-colors duration-300 text-white group-hover:text-[#88D9CF] group-active:text-[#88D9CF] text-[1.2rem] mt-2">
                                        {skill}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div >
    )
}

export default Skills
