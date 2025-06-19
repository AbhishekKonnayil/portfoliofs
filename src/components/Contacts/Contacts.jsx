import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const inputStyle = 'form-input font-medium outline-none transition-all ease-in-out border duration-200'
    const messageStyle = 'form-message font-medium outline-none transition-all ease-in-out border duration-200'
    const labelStyle = 'inline-flex font-semibold text-sm pr-[5px] transform translate-x-[25px] translate-y-[50%]'
    const socialDataStyle = `w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 `
    const detailsIconStyle = 'rounded-[50%] w-[45px] h-[45px] flex items-center justify-center text-[23px] transition-all duration-200 ease-in-out shrink-0 hover:transform scale-110'
    const submitBtnStyle = 'transition-colors duration-300 ease-in-out hover:scale-105'


    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <>

            <div
                className='flex flex-col items-start justify-start relative border-none'
                id='contacts'
                style={{ backgroundColor: theme.secondary }}
            >
                <h1 style={{ color: theme.primary }} className='heading'>Contacts</h1>
                <div className='flex flex-col items-start justify-start px-8 pt-8 pb-12 w-full'>
                    <div className='contacts-body'>
                        <div className='contacts-form'>
                            <form action='https://formsubmit.co/abhishek.konnayil@gmail.com' method='POST'>
                                <div className='input-container'>
                                    <label htmlFor='Name' className={labelStyle}
                                        style={{
                                            backgroundColor: theme.secondary,
                                            color: theme.primary,
                                        }}>
                                        Name
                                    </label>
                                    <input
                                        placeholder='John Doe'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='Name'
                                        className={inputStyle}
                                        style={{
                                            borderColor: theme.primary,
                                            backgroundColor: theme.secondary,
                                            color: theme.tertiary,
                                        }}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label
                                        htmlFor='Email'
                                        className={labelStyle}
                                        style={{
                                            backgroundColor: theme.secondary,
                                            color: theme.primary,
                                        }}>
                                        Email
                                    </label>
                                    <input
                                        placeholder='John@doe.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='Email'
                                        className={inputStyle}
                                        style={{
                                            borderColor: theme.primary,
                                            backgroundColor: theme.secondary,
                                            color: theme.tertiary,
                                        }}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label
                                        htmlFor='Message'
                                        className={labelStyle}
                                        style={{
                                            backgroundColor: theme.secondary,
                                            color: theme.primary,
                                        }}>

                                        Message
                                    </label>
                                    <textarea
                                        placeholder='Type your message....'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type='text'
                                        name='Message'
                                        className={messageStyle}
                                        style={{
                                            borderColor: theme.primary,
                                            backgroundColor: theme.secondary,
                                            color: theme.tertiary,
                                        }}
                                    />
                                </div>

                                <div
                                    className='submit-btn'>
                                    <button onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        type='submit'
                                        className={submitBtnStyle}
                                        style={{
                                            backgroundColor: isHovered ? theme.primary : theme.secondary,
                                            color: isHovered ? theme.secondary : theme.tertiary
                                        }}
                                    >
                                        <p>{!success ? 'Send' : 'Sent'}</p>
                                        <div className='submit-icon'>
                                            <AiOutlineSend
                                                className='send-icon'
                                                style={{
                                                    animation: !success
                                                        ? 'initial'
                                                        : 'fly 0.8s linear both',
                                                    position: success
                                                        ? 'absolute'
                                                        : 'initial',
                                                }}
                                            />
                                            <AiOutlineCheckCircle
                                                className='success-icon'
                                                style={{
                                                    display: !success
                                                        ? 'none'
                                                        : 'inline-flex',
                                                    opacity: !success ? '0' : '1',
                                                }}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                autoHideDuration={4000}
                                onClose={handleClose}
                            >
                                <SnackbarContent
                                    action={
                                        <React.Fragment>
                                            <IconButton
                                                size='small'
                                                aria-label='close'
                                                color='inherit'
                                                onClick={handleClose}
                                            >
                                                <CloseIcon fontSize='small' />
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                        fontFamily: 'var(--primaryFont)',
                                    }}
                                    message={errMsg}
                                />
                            </Snackbar>
                        </div>

                        <div className='contacts-details'>
                            <a
                                href={`mailto:${contactsData.email}`}
                                className='personal-details'
                            >
                                <div className={detailsIconStyle}
                                    style={{
                                        color: theme.secondary,
                                        backgroundColor: theme.primary
                                    }}>
                                    <FiAtSign />
                                </div>
                                <p style={{ color: theme.tertiary }}>
                                    {contactsData.email}
                                </p>
                            </a>
                            <a
                                href={`tel:${contactsData.phone}`}
                                className='personal-details'
                            >
                                <div className={detailsIconStyle}
                                    style={{
                                        color: theme.secondary,
                                        backgroundColor: theme.primary
                                    }}>
                                    <FiPhone />
                                </div>
                                <p style={{ color: theme.tertiary }}>
                                    {contactsData.phone}
                                </p>
                            </a>
                            {/* <div className='personal-details'>
                            <div className={detailsIconStyle}
                                style={{
                                    color: theme.secondary,
                                    backgroundColor: theme.primary
                                }}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div> */}

                            <div className='socialmedia-icons'>
                                {socialsData.twitter && (
                                    <a
                                        href={socialsData.twitter}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >
                                        <FaTwitter aria-label='Twitter' />
                                    </a>
                                )}
                                {socialsData.github && (
                                    <a
                                        href={socialsData.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaGithub aria-label='GitHub' />
                                    </a>
                                )}
                                {socialsData.linkedIn && (
                                    <a
                                        href={socialsData.linkedIn}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaLinkedinIn aria-label='LinkedIn' />
                                    </a>
                                )}
                                {socialsData.instagram && (
                                    <a
                                        href={socialsData.instagram}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaInstagram aria-label='Instagram' />
                                    </a>
                                )}
                                {socialsData.medium && (
                                    <a
                                        href={socialsData.medium}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaMediumM aria-label='Medium' />
                                    </a>
                                )}
                                {socialsData.blogger && (
                                    <a
                                        href={socialsData.blogger}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaBloggerB aria-label='Blogger' />
                                    </a>
                                )}
                                {socialsData.youtube && (
                                    <a
                                        href={socialsData.youtube}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaYoutube aria-label='YouTube' />
                                    </a>
                                )}
                                {socialsData.reddit && (
                                    <a
                                        href={socialsData.reddit}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaRedditAlien aria-label='Reddit' />
                                    </a>
                                )}
                                {socialsData.stackOverflow && (
                                    <a
                                        href={socialsData.stackOverflow}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaStackOverflow aria-label='Stack Overflow' />
                                    </a>
                                )}
                                {socialsData.codepen && (
                                    <a
                                        href={socialsData.codepen}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaCodepen aria-label='CodePen' />
                                    </a>
                                )}
                                {socialsData.gitlab && (
                                    <a
                                        href={socialsData.gitlab}
                                        target='_blank'
                                        rel='noreferrer'
                                        className={socialDataStyle}
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,

                                        }}
                                    >

                                        <FaGitlab aria-label='GitLab' />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={theme.contactsimg}
                    alt='contacts'
                    className='contacts--img'
                />
            </div>
        </>

    );
}

export default Contacts;
