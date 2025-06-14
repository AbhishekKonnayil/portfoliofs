import React, { useState, useEffect, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(document.documentElement.scrollTop > 300);
        };

        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible); // cleanup
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className="backToTop"
        >
            <button onClick={scrollToTop} aria-label="Back to top">
                <IoIosArrowDropupCircle
                    style={{
                        fontSize: '3rem',
                        color: theme.tertiary,
                    }}
                />
            </button>
        </div>
    );
}

export default BackToTop;
