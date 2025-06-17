import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { HiArrowRight } from "react-icons/hi";

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

function Projects() {
    const { theme } = useContext(ThemeContext);

    const ViewAllButton = styled('button')(() => ({
        color: theme.tertiary,
        backgroundColor: theme.primary,
        display: 'flex',
        alignItems: 'center',
        padding: '0.6rem 1.2rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            color: theme.secondary,
            backgroundColor: theme.primary,
        },
    }));

    const ViewArrow = styled(HiArrowRight)(() => ({
        color: theme.tertiary,
        backgroundColor: theme.secondary70,
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        marginLeft: '0.5rem',
        transition: 'all 0.2s ease',
        '&:hover': {
            color: theme.tertiary,
            backgroundColor: theme.secondary,
        },
    }));

    return (
        <>
            {projectsData.length > 0 && (
                <div
                    className="projects"
                    id="projects"
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div className="projects--header font-exo font-bold">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map((project) => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <NavLink to="/projects">
                                    <ViewAllButton>
                                        View All
                                        <ViewArrow />
                                    </ViewAllButton>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
