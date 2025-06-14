import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { FaCode, FaPlay } from 'react-icons/fa';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

const IconButton = styled('a')(({ themeProp }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    border: `2px solid ${themeProp.tertiary}`,
    color: themeProp.tertiary,
    transition: 'all 0.2s',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: themeProp.secondary,
        color: themeProp.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${themeProp.secondary}`,
    },
}));

const Icon = styled('span')(() => ({
    fontSize: '1.1rem',
    transition: 'all 0.2s',
}));

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const projectId = name.replace(/\s+/g, '-').toLowerCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div
                key={id}
                className="singleProject"
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className="projectContent">
                    <h2 id={projectId} style={{ color: theme.tertiary }}>
                        {name}
                    </h2>

                    <img src={image || placeholder} alt={name} />

                    <div className="project--showcaseBtn">
                        <IconButton
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            themeProp={theme}
                            aria-labelledby={`${projectId} ${projectId}-demo`}
                        >
                            <Icon
                                as={FaPlay}
                                id={`${projectId}-demo`}
                                aria-label="Demo"
                            />
                        </IconButton>

                        <IconButton
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                            themeProp={theme}
                            aria-labelledby={`${projectId} ${projectId}-code`}
                        >
                            <Icon
                                as={FaCode}
                                id={`${projectId}-code`}
                                aria-label="Code"
                            />
                        </IconButton>
                    </div>
                </div>

                <p
                    className="project--desc"
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>

                <div
                    className="project--lang"
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default SingleProject;
