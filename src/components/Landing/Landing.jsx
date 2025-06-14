import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaStackOverflow,
    FaMedium,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const resumeBtnSx = {
        color: theme.primary,
        borderRadius: '30px',
        textTransform: 'inherit',
        width: '150px',
        fontSize: '1rem',
        fontWeight: '500',
        height: '50px',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: theme.tertiary,
            color: theme.secondary,
            border: `3px solid ${theme.tertiary}`,
        },
    };

    const contactBtnSx = {
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '30px',
        textTransform: 'inherit',
        width: '150px',
        height: '50px',
        fontSize: '1rem',
        fontWeight: '500',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            border: `3px solid ${theme.tertiary}`,
        },
    };

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a href={socialsData.twitter} target='_blank' rel='noreferrer'>
                                <FaTwitter className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a href={socialsData.youtube} target='_blank' rel='noreferrer'>
                                <FaYoutube className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a href={socialsData.blogger} target='_blank' rel='noreferrer'>
                                <FaBlogger className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.stackOverflow && (
                            <a href={socialsData.stackOverflow} target='_blank' rel='noreferrer'>
                                <FaStackOverflow className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.medium && (
                            <a href={socialsData.medium} target='_blank' rel='noreferrer'>
                                <FaMedium className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt='landing'
                    className='landing--img'
                    style={{
                        opacity: drawerOpen ? '0' : '1',
                        borderColor: theme.secondary,
                    }}
                />

                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div className='lcr--content sm:flex-col' style={{ color: theme.tertiary }}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p className='sm:hidden'>{headerData.description}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button sx={resumeBtnSx}>Download CV</Button>
                                </a>
                            )}

                            <Link to='/#contacts' smooth>
                                <Button sx={contactBtnSx}>Contact</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
