import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';

import './Experience.css';

export function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    const cardStyle = {
        backgroundColor: theme.primary30,
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}

        >
            <div
                key={id}
                className='flex flex-row gap-4 h-[140px] relative  justify-start w-full p-4 rounded-[20px] hover:shadow-lg max-w-full'
                style={cardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary30;
                }}
            >
                <div
                    className="rounded-full  w-[55px] h-[55px] sm:w-[45px] sm:h-[45px] flex items-center justify-center  overflow-auto"
                    style={{ backgroundColor: theme.primary }}
                >
                    <img
                        className='w-[36px] sm:w-[30px] pointer-events-none '
                        src={theme.type === 'light' ? expImgBlack : expImgWhite}
                        alt="Experience"
                    />
                </div>

                <div className="flex flex-col gap-y-4">
                    <h6 className="text-sm font-bold" style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <div> <h4 className=' text-[1.25rem] font-semibold sm:text-[1.125rem] leading-tight' style={{ color: theme.primary80 }}>{jobtitle}</h4>
                        <h5 className='text-[1.1rem] font-medium sm:text-[1.05rem]' style={{ color: theme.primary80 }}>{company}</h5></div>
                </div>
            </div>
        </motion.div>
    );
}
