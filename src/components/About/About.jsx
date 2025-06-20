import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div style={{ backgroundColor: theme.secondary }}><div id="about" >
                <div className="top-[50px] left-[50px] transform-translate-x-[-50%] h-[50px] w-full flex items-center justify-between px-4 ">
                    <div className="w-[10px] h-[10px] rounded-[50%]" style={{ backgroundColor: theme.primary }}></div>
                    <div className="w-[10px] h-[10px] rounded-[50%]" style={{ backgroundColor: theme.primary }}></div>
                    <div className="w-[95%] h-[5px] rounded-10px" style={{ backgroundColor: theme.primary }}></div>
                </div>
            </div>
                <div>
                    <h2 className='heading' style={{ color: theme.primary }}>Who I am</h2>
                    <div className="flex flex-col items-center justify-around h-fit sm:flex-row px-8 gap-y-4">
                        <div className="mt-10 pointer-events-none">

                            <img className='w-[380px] flex-[0.5]'
                                src={theme.aboutimg1}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-start justify-evenly flex-[0.5] w-full h-fit">
                            <p style={{ color: theme.primary80 }}>{aboutData.description2}</p>
                        </div>

                    </div></div></div>

        </>



    )
}

export default About
