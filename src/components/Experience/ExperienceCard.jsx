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
                className="experience-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary30;
                }}
            >
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img
                        src={theme.type === 'light' ? expImgBlack : expImgWhite}
                        alt="Experience"
                    />
                </div>
                <div className="experience-details">
                    <h6 style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                </div>
            </div>
        </motion.div>
    );
}
