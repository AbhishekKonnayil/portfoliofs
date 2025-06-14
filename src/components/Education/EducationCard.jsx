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
        <motion.div whileHover={{ scale: 1.02 }}>
            <div
                key={id}
                className="education-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary30;
                }}
            >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img
                        src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
                        alt="Education"
                    />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{course}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
                </div>
            </div>
        </motion.div>
    );
}

export default EducationCard;
