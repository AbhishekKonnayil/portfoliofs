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
            </h1> <div className="w-full flex flex-col lg:flex-row items-center justify-between  px-10 text-[#3EC337B3]" id="resume" style={{ backgroundColor: theme.secondary }}>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >


                        <div className="w-full flex flex-col gap-4">
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
                    <motion.div
                        // className=" box-border p-4 flex mt-4 pointer-events-none"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={theme.eduimg}
                            alt="Education"
                            className="hidden lg:block lg:w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </>

    )
}

export default Education
