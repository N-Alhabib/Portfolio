import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiTarget, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { SiNextdotjs, SiTypescript, SiGraphql, SiDocker, SiAmazonwebservices, SiTensorflow, SiPostgresql, SiRedis } from 'react-icons/si';
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

                    <section className="exploring-section fade-in-up delay-3">
                        <h2><FiSearch className="section-icon" /> Technologies I'm Exploring</h2>
                        <div className="tech-grid">
                            <div className="tech-pill nextjs">
                                <SiNextdotjs className="tech-icon" />
                                <span className="tech-name">Next.js</span>
                            </div>
                            <div className="tech-pill typescript">
                                <SiTypescript className="tech-icon" />
                                <span className="tech-name">TypeScript</span>
                            </div>
                            <div className="tech-pill graphql">
                                <SiGraphql className="tech-icon" />
                                <span className="tech-name">GraphQL</span>
                            </div>
                            <div className="tech-pill docker">
                                <SiDocker className="tech-icon" />
                                <span className="tech-name">Docker</span>
                            </div>
                            <div className="tech-pill aws">
                                <SiAmazonwebservices className="tech-icon" />
                                <span className="tech-name">AWS</span>
                            </div>
                            <div className="tech-pill tensorflow">
                                <SiTensorflow className="tech-icon" />
                                <span className="tech-name">TensorFlow</span>
                            </div>
                            <div className="tech-pill postgresql">
                                <SiPostgresql className="tech-icon" />
                                <span className="tech-name">PostgreSQL</span>
                            </div>
                            <div className="tech-pill redis">
                                <SiRedis className="tech-icon" />
                                <span className="tech-name">Redis</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CurrentWorkDetail;
