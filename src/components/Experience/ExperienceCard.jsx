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
        <motion.div whileHover={{ scale: 1.02 }}>
            <div
                key={id}
                className='flex flex-row items-start justify-items-start w-[90%] h-[140px] p-6 rounded-3xl mb-6 transition-colors ease-in-out'
                style={cardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary30;
                }}
            >
                <div className="rounded-[50%] w-[55px] h-[55px] flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primary }}>
                    <img className='w-[36px] pointer-events-none'
                        src={theme.type === 'light' ? expImgBlack : expImgWhite}
                        alt="Experience"
                    />
                </div>
                <div className="ml-2.5">
                    <h6 className="font-bold text-sm mb-2" style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <h4 className='text-lg font-semibold' style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 className='text-lg font-semibold' style={{ color: theme.tertiary80 }}>{company}</h5>
                </div>
            </div>
        </motion.div>
    );
}
