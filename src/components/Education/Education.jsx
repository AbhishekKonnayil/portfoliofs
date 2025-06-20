import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div style={{ backgroundColor: theme.secondary }}> <h1
                className="heading"
                style={{ color: theme.primary }}
            >
                Education
            </h1>
                <div className=" w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 gap-6">



                    {/* left side */}


                    <motion.div
                    className='w-full  flex flex-col justify-center items-start gap-6'
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >


                        <div className="w-full">
                            {educationData.map((edu) => (
                                <EducationCard
                                    key={edu.id}
                                    id={edu.id}
                                    institution={edu.institution}
                                    course={edu.course}
                                    startYear={edu.startYear}
                                    endYear={edu.endYear}

                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* right side image */}
                    <motion.div
                        className=" hidden lg:flex w-full justify-center items-center mt-10 lg:mt-0"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className='max-w-md w-full pointer-events-none'> <img
                            src={theme.eduimg}
                            alt="Education"
                        />
                        </div>

                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default Education
