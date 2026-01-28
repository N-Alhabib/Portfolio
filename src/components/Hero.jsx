import React from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-12 text-center">
                        <div className="hero-content">
                            <h1 className="hero-title fade-in-up">
                                IT Student / Web Developer / <span className="gradient-text">AI Projects</span>
                            </h1>

                            <p className="hero-subtitle fade-in-up delay-1">
                                Building clean, accessible interfaces and AI-powered systems with modern technologies.
                                Passionate about creating exceptional user experiences and solving complex problems.
                            </p>

                            <div className="hero-stats fade-in-up delay-2">
                                <div className="stat-chip">
                                    <span className="stat-icon">🎓</span>
                                    <span>Graduation Project</span>
                                </div>
                                <div className="stat-chip">
                                    <span className="stat-icon">💼</span>
                                    <span>Internship Experience</span>
                                </div>
                                <div className="stat-chip">
                                    <span className="stat-icon">🚀</span>
                                    <span>Active Learner</span>
                                </div>
                            </div>

                            <div className="hero-cta fade-in-up delay-3">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={scrollToProjects}
                                    aria-label="View my projects"
                                >
                                    View Projects <FiArrowRight className="ms-2" />
                                </button>
                                <a
                                    href="#"
                                    className="btn btn-outline-primary btn-lg ms-3"
                                    aria-label="Download my CV"
                                >
                                    <FiDownload className="me-2" /> Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;
