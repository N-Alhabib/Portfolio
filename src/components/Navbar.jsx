import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import profileAvatar from '../assets/صورة شخصية.jpg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setExpanded(false);
            }
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src={profileAvatar}
                        alt="Nawaf Alhabib"
                        className="navbar-avatar me-2"
                    />
                    <span className="brand-name">Nawaf Alhabib</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="navbarNav"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('about');
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('projects');
                                }}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#skills"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('skills');
                                }}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
