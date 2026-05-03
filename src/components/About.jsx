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
                            <h3 className="mb-4">Building Reliable Systems with Code</h3>
                            <p className="lead">
                                Fresh IT graduate (GPA 4.15/5) with hands-on DevOps experience at a Saudi
                                logistics startup, where I proposed and led a CI/CD initiative across staging
                                and production environments.
                            </p>
                            <p>
                                My graduation project — an AI-powered log anomaly detection system — achieved
                                up to 95% accuracy across three benchmark datasets, combining Python, scikit-learn,
                                and the Drain3 parsing algorithm in an end-to-end pipeline.
                            </p>
                            <p>
                                I'm skilled in building automated infrastructure with GitHub Actions, Docker, and
                                Apache, and I enjoy bridging the gap between reliable DevOps practices and smart,
                                data-driven systems.
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
                                <p>BSc in Information Technology — Qassim University (2021–2026) · GPA 4.15/5</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">
                                    <FiCode />
                                </div>
                                <h4>Focus Areas</h4>
                                <p>DevOps & CI/CD, AI & Data Pipelines, REST APIs, Frontend Development</p>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">
                                    <FiCoffee />
                                </div>
                                <h4>Interests</h4>
                                <p>Automation, Open Source, Log Analytics, Intelligent Infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
