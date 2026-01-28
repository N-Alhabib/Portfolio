import React from 'react';
import { FiCode, FiBookOpen, FiCoffee } from 'react-icons/fi';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="about-content fade-in-up">
                            <h3 className="mb-4">Building the Future with Code</h3>
                            <p className="lead">
                                I'm an IT student passionate about creating elegant solutions to complex problems.
                                My focus lies in web development and artificial intelligence, where I combine
                                clean design principles with cutting-edge technology.
                            </p>
                            <p>
                                Currently pursuing my degree while gaining hands-on experience through internships
                                and personal projects. I believe in continuous learning and staying updated with
                                the latest industry trends and best practices.
                            </p>
                            <p>
                                My approach to development emphasizes user experience, accessibility, and
                                maintainable code. I enjoy collaborating with teams and contributing to
                                projects that make a real impact.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="highlights-grid fade-in-up delay-1">
                            <div className="highlight-card">
                                <div className="highlight-icon">
                                    <FiBookOpen />
                                </div>
                                <h4>Education</h4>
                                <p>IT Student specializing in Software Development and AI/ML technologies</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">
                                    <FiCode />
                                </div>
                                <h4>Focus Areas</h4>
                                <p>Web Development, UI/UX Design, Machine Learning, and System Architecture</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">
                                    <FiCoffee />
                                </div>
                                <h4>Interests</h4>
                                <p>Open Source, Modern Frameworks, AI Innovation, and User-Centric Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
