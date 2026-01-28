import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiTarget, FiTrendingUp, FiPackage } from 'react-icons/fi';
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
                            I'm currently deepening my expertise in modern web development and exploring
                            advanced AI/ML applications. My focus is on building production-quality applications
                            that solve real-world problems while maintaining excellent user experience.
                        </p>
                        <ul>
                            <li>Mastering React ecosystem and modern state management patterns</li>
                            <li>Exploring serverless architectures and cloud deployment strategies</li>
                            <li>Building full-stack applications with focus on performance and scalability</li>
                            <li>Contributing to open-source projects and learning from the community</li>
                        </ul>
                    </section>

                    <section className="detail-section fade-in-up delay-2">
                        <div className="icon-header">
                            <FiTrendingUp className="section-icon" />
                            <h2>Learning Goals</h2>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h4>Advanced React Patterns</h4>
                                <p>
                                    Diving deep into React performance optimization, custom hooks,
                                    and advanced component patterns
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>Backend Development</h4>
                                <p>
                                    Expanding skills in Node.js, Express, and database design for
                                    building robust APIs
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>AI/ML Integration</h4>
                                <p>
                                    Learning to integrate machine learning models into web applications
                                    for intelligent features
                                </p>
                            </div>
                            <div className="feature-card">
                                <h4>DevOps & Deployment</h4>
                                <p>
                                    Understanding CI/CD pipelines, containerization, and cloud
                                    infrastructure management
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-3">
                        <div className="icon-header">
                            <FiPackage className="section-icon" />
                            <h2>Upcoming Projects</h2>
                        </div>
                        <p>
                            I'm planning several exciting projects to apply my learning and expand my portfolio:
                        </p>
                        <div className="upcoming-projects">
                            <div className="project-item">
                                <h4>Real-time Collaboration Tool</h4>
                                <p>
                                    Building a collaborative workspace application with WebSocket integration
                                    for real-time updates and team communication
                                </p>
                                <div className="tech-stack">
                                    <span className="badge bg-primary">React</span>
                                    <span className="badge bg-primary">Node.js</span>
                                    <span className="badge bg-primary">WebSocket</span>
                                    <span className="badge bg-primary">MongoDB</span>
                                </div>
                            </div>

                            <div className="project-item">
                                <h4>AI-Powered Content Assistant</h4>
                                <p>
                                    Developing an intelligent content creation tool that leverages AI
                                    to help users write better, faster
                                </p>
                                <div className="tech-stack">
                                    <span className="badge bg-primary">React</span>
                                    <span className="badge bg-primary">OpenAI API</span>
                                    <span className="badge bg-primary">TypeScript</span>
                                </div>
                            </div>

                            <div className="project-item">
                                <h4>Personal Finance Dashboard</h4>
                                <p>
                                    Creating a comprehensive financial tracking and analytics platform
                                    with data visualization and insights
                                </p>
                                <div className="tech-stack">
                                    <span className="badge bg-primary">React</span>
                                    <span className="badge bg-primary">D3.js</span>
                                    <span className="badge bg-primary">Firebase</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-4">
                        <h2>Technologies I'm Exploring</h2>
                        <div className="tech-stack">
                            <span className="badge bg-primary">Next.js</span>
                            <span className="badge bg-primary">TypeScript</span>
                            <span className="badge bg-primary">GraphQL</span>
                            <span className="badge bg-primary">Docker</span>
                            <span className="badge bg-primary">AWS</span>
                            <span className="badge bg-primary">TensorFlow</span>
                            <span className="badge bg-primary">PostgreSQL</span>
                            <span className="badge bg-primary">Redis</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CurrentWorkDetail;
