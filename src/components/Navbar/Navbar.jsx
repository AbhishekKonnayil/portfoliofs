import React, { useContext, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

import { BsFillGearFill } from 'react-icons/bs';
import { FaFolderOpen, FaUser } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { Link } from 'react-scroll';

import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import './Navbar.css';

function Navbar() {
    const { theme: customTheme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const shortname = (name) =>
        name.length > 12 ? name.split(' ')[0] : name;

    const menuItems = [
        { label: 'Home', icon: <IoHomeSharp />, to: 'home' },
        { label: 'About', icon: <FaUser />, to: 'about' },
        { label: 'Resume', icon: <HiDocumentText />, to: 'resume' },
        { label: 'Services', icon: <BsFillGearFill />, to: 'services' },
        { label: 'Blog', icon: <FaFolderOpen />, to: 'blog' },
        { label: 'Contact', icon: <MdPhone />, to: 'contacts' },
    ];

    // Prevent background scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open]);

    return (
        <div className="navbar">
            <div className="navbar--container flex items-center justify-between">
                <h1 style={{ color: customTheme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <IoMenuSharp
                    onClick={handleDrawerOpen}
                    aria-label="Open Navigation Menu"
                    className="text-[2.5rem] cursor-pointer -translate-y-2 transition-colors duration-300"
                    style={{ color: customTheme.secondary }}
                />
            </div>

            <Drawer
                open={open}
                onClose={handleDrawerClose}
                anchor="left"
                hideBackdrop={false}
                PaperProps={{
                    sx: {
                        backgroundColor: customTheme.secondary,
                        borderTopRightRadius: '40px',
                        borderBottomRightRadius: '40px',
                        width: {
                            xs: '12em',
                            sm: '14em',
                        },
                        padding: '1.8em 1em',
                        position: 'relative',
                    },
                }}
            >
                <IconButton
                    onClick={handleDrawerClose}
                    aria-label="Close Navigation"
                    className="absolute top-0 left-15 sm:top-10 sm:right-10"
                >
                    <CloseIcon
                        style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: customTheme.primary,
                        }}
                        className="hover:text-white transition-all"
                    />
                </IconButton>

                <div onClick={handleDrawerClose} className="mt-16 sm:mt-20">
                    <div className="flex flex-col items-center gap-4 w-full">
                        {menuItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.03 }}
                                className="w-full flex justify-center"
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    spy={true}
                                    duration={1000}
                                    aria-label={`Go to ${item.label}`}
                                    className="w-[85%] sm:w-full"
                                >
                                    <div
                                        className="w-full h-[52px] sm:h-[48px] border-2 px-5 sm:px-4 rounded-full cursor-pointer 
                                                   flex items-center justify-start gap-x-3 transition-all duration-200"
                                        style={{
                                            background: customTheme.secondary,
                                            borderColor: customTheme.primary,
                                            color: customTheme.primary,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = customTheme.primary;
                                            e.currentTarget.style.color = customTheme.secondary;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = customTheme.secondary;
                                            e.currentTarget.style.color = customTheme.primary;
                                        }}
                                    >
                                        <span className="text-[1.4rem] sm:text-[1.2rem] flex items-center">
                                            {item.icon}
                                        </span>
                                        <span
                                            className="font-[var(--primaryFont)] text-[1.125rem] sm:text-[1rem] font-semibold"
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
