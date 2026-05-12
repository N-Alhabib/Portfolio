import React from 'react';
import { FiArrowRight, FiDownload, FiAward, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
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
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <div className="hero-content">
                            <p className="hero-label fade-in-up">Hello, I'm</p>
                            <h1 className="hero-name fade-in-up">Nawaf Alhabib</h1>
                            <h2 className="hero-title fade-in-up">
                                IT Fresh Graduate | <span className="gradient-text">Software Development</span>
                            </h2>

                            <p className="hero-subtitle fade-in-up delay-1">
                                Fresh IT graduate with hands-on DevOps experience — led a CI/CD initiative at a Saudi
                                logistics startup and built an AI log anomaly detection system with 95% accuracy.
                            </p>

                            <div className="hero-stats fade-in-up delay-2">
                                <div className="stat-chip">
                                    <FiAward className="stat-icon" />
                                    <span>GPA 4.15 / 5</span>
                                </div>
                                <div className="stat-chip">
                                    <FiBriefcase className="stat-icon" />
                                    <span>DevOps Internship</span>
                                </div>
                                <div className="stat-chip">
                                    <FiTrendingUp className="stat-icon" />
                                    <span>AI Graduation Project</span>
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
                                    href="/docs/Nawaf_Alhabib_IT_CV.pdf"
                                    download="Nawaf_Alhabib_IT_CV.pdf"
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
