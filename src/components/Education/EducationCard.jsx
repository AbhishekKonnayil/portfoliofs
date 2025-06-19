import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    // Inline style for card hover effect
    const cardStyle = {
        backgroundColor: theme.primary30,
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}>
            
            <div
                key={id}
                className="flex flex-row items-start justify-start gap-4 h-[200px] p-6 rounded-[20px] xs:h-[180px] sm:h-[140px] transition-colors duration-200 ease-in-out"
                style={cardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary30;
                }}
            >
                <div className="rounded-[50%] w-[55px] h-[55px] flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primary }}>
                    <img className='w-[40px]'
                        src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
                        alt="Education"
                    />
                </div>
                <div className="flex flex-col gap-y-4">
                    <h6 className='text-sm font-bold' style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <div><h4 className='text-[1.25rem] font-semibold sm:text-[1.125rem] leading-tight ' style={{ color: theme.tertiary }}>{course}</h4>
                        <h5 className='text-[1.1rem] font-medium sm:text-[1.05rem]' style={{ color: theme.tertiary80 }}>{institution}</h5></div>

                </div>
            </div>
        </motion.div>
    );
}

export default EducationCard;
