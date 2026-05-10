import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiTarget, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { SiDocker, SiGithubactions, SiPython, SiGit } from 'react-icons/si';
import './ProjectDetail.css';

const CurrentWorkDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="project-detail">
            <div className="container">
                <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/')}>
                    <FiArrowLeft className="me-2" /> Back to Home
                </button>

                <div className="detail-header fade-in-up">
                    <div className="detail-badge">Current Focus</div>
                    <h1 className="detail-title">What I'm Working On</h1>
                    <p className="detail-subtitle">
                        Continuous learning and building innovative projects
                    </p>
                </div>

                <div className="detail-content">
                    <section className="detail-section fade-in-up delay-1">
                        <div className="icon-header">
                            <FiTarget className="section-icon" />
                            <h2>Current Focus</h2>
                        </div>
                        <p>
                            Having just graduated with a BSc in IT (GPA 4.15/5), I'm actively seeking a full-time
                            role in DevOps, software engineering, or a related field. In the meantime I'm building
                            on the skills from my internship and graduation project — going deeper into cloud
                            infrastructure, automation, and AI-driven systems.
                        </p>
                        <ul>
                            <li>Expanding CI/CD expertise with more advanced GitHub Actions workflows</li>
                            <li>Exploring cloud platforms and infrastructure-as-code practices</li>
                            <li>Building personal projects that apply AI and automation together</li>
                            <li>Strengthening REST API design and backend fundamentals</li>
                        </ul>
                    </section>

                    <section className="detail-section fade-in-up delay-2">
                        <div className="icon-header">
                            <FiTrendingUp className="section-icon" />
                            <h2>Goals</h2>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h4>Cloud Infrastructure</h4>
                                <p>
                                    Moving from manual Docker/Apache setups toward cloud-native
                                    deployment patterns and infrastructure-as-code
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>Advanced Automation</h4>
                                <p>
                                    Building more sophisticated GitHub Actions pipelines with testing,
                                    security scanning, and multi-environment strategies
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>AI & Data Pipelines</h4>
                                <p>
                                    Extending my log analysis work into broader observability and
                                    intelligent monitoring use cases
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>Open to Opportunities</h4>
                                <p>
                                    Looking for a team where I can contribute real DevOps or engineering
                                    value from day one and keep growing fast
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="exploring-section fade-in-up delay-3">
                        <h2><FiSearch className="section-icon" /> Technologies I'm Deepening</h2>
                        <div className="tech-grid">
                            <div className="tech-pill docker">
                                <SiDocker className="tech-icon" />
                                <span className="tech-name">Docker</span>
                            </div>
                            <div className="tech-pill github">
                                <SiGithubactions className="tech-icon" />
                                <span className="tech-name">GitHub Actions</span>
                            </div>
                            <div className="tech-pill python">
                                <SiPython className="tech-icon" />
                                <span className="tech-name">Python</span>
                            </div>
                            <div className="tech-pill git">
                                <SiGit className="tech-icon" />
                                <span className="tech-name">Git</span>
                            </div>
                            <div className="tech-pill">
                                <span className="tech-name">Claude Code</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CurrentWorkDetail;
