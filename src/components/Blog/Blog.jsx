import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import SingleBlog from './SingleBlog/SingleBlog';

function Blog() {
    const { theme } = useContext(ThemeContext);

    const viewAllBtnStyle = {
        color: theme.tertiary,
        backgroundColor: theme.primary,
        padding: '0.5rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    const viewArrStyle = {
        color: theme.tertiary,
        backgroundColor: theme.secondary70,
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            {blogData.length > 0 && (
                <div
                    className="blog"
                    id="blog"
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div className="blog--header">
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map((blog) => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <NavLink to="/blog">
                                    <button
                                        style={viewAllBtnStyle}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = theme.secondary;
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = theme.tertiary;
                                        }}
                                    >
                                        View All
                                        <HiArrowRight
                                            style={viewArrStyle}
                                            onMouseOver={(e) =>
                                                (e.currentTarget.style.backgroundColor = theme.secondary)
                                            }
                                            onMouseOut={(e) =>
                                            (e.currentTarget.style.backgroundColor =
                                                theme.secondary70)
                                            }
                                        />
                                    </button>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Blog;