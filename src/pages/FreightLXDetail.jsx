import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiDownload } from 'react-icons/fi';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './ProjectDetail.css';

// Configure PDF.js worker - using version-matched CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FreightLXDetail = () => {
    const navigate = useNavigate();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const pdfPath = '/docs/FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf';

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
        setError(false);
    }

    function onDocumentLoadError(error) {
        console.error('Error loading PDF:', error);
        setError(true);
        setLoading(false);
    }

    const openInNewTab = () => {
        window.open(pdfPath, '_blank');
    };

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf';
        link.click();
    };

    return (
        <div className="project-detail">
            <div className="container">
                <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/')}>
                    <FiArrowLeft className="me-2" /> Back to Home
                </button>

                <div className="detail-header fade-in-up">
                    <div className="detail-badge">Internship Experience</div>
                    <h1 className="detail-title">COOP — FreightLX</h1>
                    <p className="detail-subtitle">
                        Continuous Work Log: IT Intern at FreightLX
                    </p>
                </div>

                <div className="detail-content">
                    <section className="detail-section fade-in-up delay-1">
                        <h2>Internship Summary</h2>
                        <div className="internship-info">
                            <div className="info-item">
                                <strong>Role:</strong> IT Intern
                            </div>
                            <div className="info-item">
                                <strong>Start Date:</strong> January 11, 2026
                            </div>
                            <div className="info-item">
                                <strong>Last Updated:</strong> January 26, 2026
                            </div>
                        </div>
                        <p>
                            This document provides a comprehensive activity log of my internship at FreightLX,
                            tracking continuous work entries including website review and feedback, UX analysis,
                            website testing, issue reporting, and collaborative contributions to the platform.
                        </p>
                    </section>

                    <section className="detail-section fade-in-up delay-2">
                        <h2>Activity Log Document</h2>
                        <p className="mb-4">
                            View the complete internship activity log below. The document includes detailed
                            entries of daily activities, contributions, and learnings throughout the internship period.
                        </p>

                        <div className="pdf-actions">
                            <button className="btn btn-primary" onClick={openInNewTab}>
                                <FiExternalLink className="me-2" /> Open in New Tab
                            </button>
                            <button className="btn btn-outline-primary" onClick={downloadPDF}>
                                <FiDownload className="me-2" /> Download PDF
                            </button>
                        </div>

                        <div className="pdf-viewer-container">
                            {loading && (
                                <div className="pdf-loading">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading PDF...</span>
                                    </div>
                                    <p className="mt-3">Loading document...</p>
                                </div>
                            )}

                            {error && (
                                <div className="pdf-error">
                                    <p className="text-danger">
                                        Unable to load PDF. Please ensure the file is placed at:
                                        <code className="d-block mt-2">/docs/FreightLX_Internship_Activity_Log_Nawaf_Alhabib.pdf</code>
                                    </p>
                                    <button className="btn btn-primary mt-3" onClick={downloadPDF}>
                                        Try Download Instead
                                    </button>
                                </div>
                            )}

                            <Document
                                file={pdfPath}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                loading=""
                            >
                                {!error && !loading && (
                                    <>
                                        {Array.from(new Array(numPages), (el, index) => (
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                                renderTextLayer={true}
                                                renderAnnotationLayer={true}
                                                className="pdf-page"
                                                width={Math.min(window.innerWidth - 100, 800)}
                                            />
                                        ))}
                                    </>
                                )}
                            </Document>

                            {numPages && !error && (
                                <div className="pdf-info">
                                    <p className="text-muted">
                                        Total pages: {numPages}
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FreightLXDetail;
