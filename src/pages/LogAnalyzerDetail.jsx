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
                        AI/DL-based system for automated log anomaly detection and intelligent analysis
                    </p>
                </div>

                <div className="detail-content">
                    <section className="detail-section fade-in-up delay-1">
                        <h2>Overview</h2>
                        <p>
                            The Intelligent Log Files Analyzer is an AI-powered system built as my graduation project
                            at Qassim University (2024–2025). It automatically detects anomalies in system log files
                            using deep learning, achieving up to 95% accuracy across three benchmark datasets on
                            both structured and semi-structured log data.
                        </p>
                    </section>

                    <section className="detail-section fade-in-up delay-2">
                        <h2>Problem Statement</h2>
                        <p>
                            System administrators face the challenge of manually reviewing thousands of log entries
                            to identify failures, intrusions, or degradation — a process that doesn't scale and
                            misses time-sensitive anomalies.
                        </p>
                        <ul>
                            <li>Manual log review is slow and error-prone at scale</li>
                            <li>Critical anomalies can go undetected in high-volume log streams</li>
                            <li>Existing rule-based tools can't adapt to evolving system behavior</li>
                        </ul>
                    </section>

                    <section className="detail-section fade-in-up delay-3">
                        <h2>Pipeline Architecture</h2>
                        <p>
                            I designed an end-to-end data pipeline covering every stage from raw logs to anomaly
                            classification:
                        </p>
                        <ul>
                            <li><strong>Log Ingestion:</strong> reads raw log files from structured and semi-structured sources</li>
                            <li><strong>Parsing:</strong> Drain3 extracts event templates from unstructured log lines</li>
                            <li><strong>Sequence Preparation:</strong> log events are grouped and encoded into sequences</li>
                            <li><strong>Deep Learning Detection:</strong> trained deep learning models classify sequences as normal or anomalous</li>
                        </ul>
                    </section>

                    <section className="detail-section fade-in-up delay-4">
                        <h2>Tech Stack</h2>
                        <div className="tech-stack">
                            <span className="badge bg-primary">Python</span>
                            <span className="badge bg-primary">scikit-learn</span>
                            <span className="badge bg-primary">Drain3</span>
                            <span className="badge bg-primary">pandas</span>
                            <span className="badge bg-primary">NumPy</span>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-5">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h4>Automated Anomaly Detection</h4>
                                <p>Deep learning models identify deviations from normal log patterns without manual rules</p>
                            </div>
                            <div className="feature-card">
                                <h4>Drain3 Log Parsing</h4>
                                <p>Efficiently extracts event templates from raw, unstructured log lines at scale</p>
                            </div>
                            <div className="feature-card">
                                <h4>Multi-dataset Validation</h4>
                                <p>Benchmarked across 3 real-world datasets covering different log formats and systems</p>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section fade-in-up delay-6">
                        <h2>Results</h2>
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <div className="metric-value">95%</div>
                                <div className="metric-label">Anomaly Detection Accuracy</div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">3</div>
                                <div className="metric-label">Benchmark Datasets</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LogAnalyzerDetail;
