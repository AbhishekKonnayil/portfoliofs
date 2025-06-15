import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';

import { experienceData } from '../../data/experienceData';
import { ExperienceCard } from './ExperienceCard';

function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            id="experience"
            className=" w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 gap-6"
            style={{ backgroundColor: theme.secondary }}
        >
            {/* Left Side Image */}
            <motion.div
                className=" hidden lg:flex w-full justify-center items-center mt-10 lg:mt-0"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img
                    src={theme.expimg}
                    alt="Experience"
                    className="max-w-md w-full pointer-events-none"
                />
            </motion.div>

            {/* Right Side Content */}
            <motion.div
                className="  w-full  flex flex-col justify-center items-start gap-6"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h1
                    className="text-[3rem] sm:text-[3.5rem] font-serif self-center lg:self-end"
                    style={{ color: theme.primary }}
                >
                    Experience
                </h1>

                <div className="mt-1 w-full">
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                        />
                    ))}
                </div>
            </motion.div>
        </div>

    );
}

export default Experience;
