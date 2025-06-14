import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import {ExperienceCard} from './ExperienceCard'

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="min-h-screen" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="flex flex-row items-center justify-center w-full">
                 <div className="box-border p-4 flex-2/6 ml-[7%] mt-4 pointer-events-none">
                     <img className='w-full pointer-events-auto' src={theme.expimg} alt="" />
                 </div>
                 <div className="w-full flex-8/12 p-8 flex flex-col items-end justify-center mr-8">
                    <h1 className='text-6xl font-serif mb-8' style={{color:theme.primary}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
