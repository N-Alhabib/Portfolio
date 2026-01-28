import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectDetail.css';

const LogAnalyzerDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="project-detail">
            <div className="container">
                <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/')}>
                    <FiArrowLeft className="me-2" /> Back to Home
                </button>

                <div className="detail-header fade-in-up">
                    <div className="detail-badge">Graduation Project</div>
                    <h1 className="detail-title">Intelligent Log Files Analyzer</h1>
                    <p className="detail-subtitle">
                        AI/ML-based system for automated log anomaly detection and intelligent analysis
                    </p>
                </div>

                <div className="detail-content">
                    <section className="detail-section fade-in-up delay-1">
                        <h2>Overview</h2>
                        <p>
                            The Intelligent Log Files Analyzer is a sophisticated machine learning system designed
                            to automatically detect anomalies and patterns in system log files. This graduation
                            project demonstrates the practical application of AI/ML techniques to solve real-world
                            IT infrastructure challenges.
                        </p>
                    </section>

                    <section className="detail-section fade-in-up delay-2">
                        <h2>Problem Statement</h2>
                        <p>
                            System administrators face the challenge of manually reviewing thousands of log entries
                            daily to identify potential issues. This process is time-consuming, error-prone, and
                            often results in delayed detection of critical problems.
                        </p>
                        <ul>
                            <li>Manual log analysis is inefficient and doesn't scale</li>
                            <li>Critical anomalies can be missed in high-volume log streams</li>
                            <li>Pattern recognition requires expert knowledge and experience</li>
                            <li>Real-time monitoring is difficult with traditional approaches</li>
                        </ul>
                    </section>

                    <section className="detail-section fade-in-up delay-3">
                        <h2>Solution</h2>
                        <p>
                            Our AI-powered solution leverages machine learning algorithms to automatically analyze
                            log files, detect anomalies, and provide actionable insights. The system learns from
                            historical data to identify normal patterns and flag deviations that may indicate issues.
                        </p>
                    </section>

                    <section className="detail-section fade-in-up delay-4">
                        <h2>Tech Stack</h2>
                        <div className="tech-stack">
                            <span className="badge bg-primary">Python</span>
                            <span className="badge bg-primary">Scikit-learn</span>
                            <span className="badge bg-primary">Pandas</span>
                            <span className="badge bg-primary">NumPy</span>
                            <span className="badge bg-primary">Machine Learning</span>
                            <span className="badge bg-primary">Data Analysis</span>
                            <span className="badge bg-primary">NLP</span>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-5">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h4>Automated Anomaly Detection</h4>
                                <p>ML algorithms identify unusual patterns and potential issues automatically</p>
                            </div>
                            <div className="feature-card">
                                <h4>Pattern Recognition</h4>
                                <p>Learns from historical data to understand normal system behavior</p>
                            </div>
                            <div className="feature-card">
                                <h4>Real-time Analysis</h4>
                                <p>Processes log streams in real-time for immediate insights</p>
                            </div>
                            <div className="feature-card">
                                <h4>Intelligent Reporting</h4>
                                <p>Generates comprehensive reports with actionable recommendations</p>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-6">
                        <h2>Results & Impact</h2>
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <div className="metric-value">95%</div>
                                <div className="metric-label">Anomaly Detection Accuracy</div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">80%</div>
                                <div className="metric-label">Time Saved vs Manual Review</div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">Real-time</div>
                                <div className="metric-label">Processing Speed</div>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-7">
                        <h2>Links & Resources</h2>
                        <div className="project-links">
                            <a href="#" className="btn btn-primary">
                                <FiGithub className="me-2" /> View on GitHub
                            </a>
                            <a href="#" className="btn btn-outline-primary">
                                <FiExternalLink className="me-2" /> Live Demo
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LogAnalyzerDetail;
