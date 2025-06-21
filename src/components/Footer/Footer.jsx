import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="p-8 text-center" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
               &copy; {new Date().getFullYear()} {headerData.name}.<br/> Built with React.js and Tailwind CSS.
            </p>
        </div>
    )
}

export default Footer

