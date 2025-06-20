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

    const socialLanding = 'text-[35px] mr-4  transition-transform duration-200 hover:scale-105'

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
        <div className='flex flex-col sm:flex-row  relative'>
            <div
                className='sm:w-[35%] w-full h-[120px] sm:h-auto flex flex-col justify-end items-center mt-auto'
                style={{ backgroundColor: theme.primary }}
            >
                <div className='hidden sm:flex flex-row gap-4 pb-8 '>
                    {socialsData.linkedIn && (
                        <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                            <FaLinkedin className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.github && (
                        <a href={socialsData.github} target='_blank' rel='noreferrer'>
                            <FaGithub className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.twitter && (
                        <a href={socialsData.twitter} target='_blank' rel='noreferrer'>
                            <FaTwitter className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.youtube && (
                        <a href={socialsData.youtube} target='_blank' rel='noreferrer'>
                            <FaYoutube className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.blogger && (
                        <a href={socialsData.blogger} target='_blank' rel='noreferrer'>
                            <FaBlogger className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.stackOverflow && (
                        <a href={socialsData.stackOverflow} target='_blank' rel='noreferrer'>
                            <FaStackOverflow className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                    {socialsData.medium && (
                        <a href={socialsData.medium} target='_blank' rel='noreferrer'>
                            <FaMedium className={socialLanding} style={{ color: theme.secondary }} />
                        </a>
                    )}
                </div>
            </div>

            <img
                src={headerData.image}
                alt='landing'
                className='hidden  md:block absolute object-cover rounded-[50%] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] transition-opacity duration-300 size-[200px] left-[35%] translate-y-0 bottom-[10%] sm:translate-x-[-40%] '
                style={{
                    opacity: drawerOpen ? '0' : '1',
                    borderColor: theme.secondary,
                }}
            />




            {/* container right */}
            <div
                className='flex flex-col justify-end p-8 sm:justify-center items-center flex-1 sm:w-[65%]'
                style={{ backgroundColor: theme.secondary }}
            >
                <img
                    src={headerData.image}
                    alt='landing'
                    className='rounded-[50%] size-[200px] md:hidden'
                    style={{
                        opacity: drawerOpen ? '0' : '1',
                        borderColor: theme.secondary,
                    }}
                />
                <div className='font-exo flex flex-col gap-4 items-center justify-end' style={{ color: theme.primary80 }}>
                    <h6 className='font-medium text-[1.25rem] mb-[-0.85rem] opacity-[0.8]'>{headerData.title}</h6>
                    <h1 className='font-semibold text-[3.25rem] leading-[110%] ml-[1rem]'>{headerData.name}</h1>
                    {/* <p className='mt-[1.45rem] font-medium text-[1.15rem] opacity-[0.7] '>{headerData.description}</p> */}

                    <div className='hidden sm:mt-[2rem] sm:w-[350px] sm:flex sm:items-center sm:justify-between'>
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
                    <div className=' flex flex-row gap-4 pb-8 sm:hidden'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a href={socialsData.twitter} target='_blank' rel='noreferrer'>
                                <FaTwitter className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a href={socialsData.youtube} target='_blank' rel='noreferrer'>
                                <FaYoutube className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a href={socialsData.blogger} target='_blank' rel='noreferrer'>
                                <FaBlogger className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.stackOverflow && (
                            <a href={socialsData.stackOverflow} target='_blank' rel='noreferrer'>
                                <FaStackOverflow className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                        {socialsData.medium && (
                            <a href={socialsData.medium} target='_blank' rel='noreferrer'>
                                <FaMedium className={socialLanding} style={{ color: theme.primary }} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
