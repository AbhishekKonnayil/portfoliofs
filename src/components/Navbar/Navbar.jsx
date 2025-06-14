import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { FaFolderOpen, FaUser } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { Link } from 'react-scroll';

import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import './Navbar.css';

// Styled components
const NavMenuIcon = styled(IoMenuSharp)(({ theme }) => ({
    fontSize: '2.5rem',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    transform: 'translateY(-10px)',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const DrawerPaper = styled('div')(({ theme }) => ({
    padding: '1.8em 1em',
    width: '14em',
    background: theme.palette.background.paper,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '12em',
    },
}));

const CloseBtnIcon = styled(CloseIcon)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    position: 'absolute',
    right: 40,
    top: 40,
    '&:hover': {
        color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
    },
}));

const DrawerItem = styled('div')(({ theme }) => ({
    margin: '2rem auto',
    borderRadius: '78.84px',
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    width: '85%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 30px',
    boxSizing: 'border-box',
    border: `2px solid ${theme.palette.primary.main}`,
    transition: 'all 0.2s ease',
    '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.background.paper,
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '55px',
        padding: '0 25px',
    },
}));

const DrawerLinks = styled('span')(({ theme }) => ({
    fontFamily: 'var(--primaryFont)',
    width: '50%',
    fontSize: '1.3rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
    },
}));

const DrawerIcon = styled('span')(({ theme }) => ({
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.385rem',
    },
}));

function Navbar() {
    const theme = useTheme();
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

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: customTheme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <NavMenuIcon
                    onClick={handleDrawerOpen}
                    aria-label='Open Navigation Menu'
                />
            </div>

            <Drawer
                open={open}
                onClose={handleDrawerClose}
                anchor='left'
                PaperProps={{ sx: { background: customTheme.secondary } }}
                hideBackdrop={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <DrawerPaper role='navigation' aria-label='Main Navigation'>
                    <IconButton
                        onClick={handleDrawerClose}
                        aria-label='Close Navigation'
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                    >
                        <CloseBtnIcon />
                    </IconButton>

                    <div onClick={handleDrawerClose} style={{ marginTop: '4rem' }}>
                        <div className='navLink--container'>
                            {menuItems.map((item, idx) => (
                                <motion.div key={idx}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        spy={true}
                                        duration={1000}
                                        aria-label={`Go to ${item.label}`}
                                    >
                                        <DrawerItem>
                                            <DrawerIcon>{item.icon}</DrawerIcon>
                                            <DrawerLinks>{item.label}</DrawerLinks>
                                        </DrawerItem>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </DrawerPaper>
            </Drawer>
        </div>
    );
}

export default Navbar;
