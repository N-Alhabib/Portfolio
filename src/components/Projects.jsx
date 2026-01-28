import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 'log-analyzer',
            title: 'Intelligent Log Files Analyzer',
            subtitle: 'Graduation Project',
            description: 'AI/ML-based system for automated log anomaly detection and analysis. Leverages machine learning algorithms to identify patterns and potential issues in system logs.',
            tags: ['Python', 'Machine Learning', 'AI', 'Data Analysis']
        },
        {
            id: 'freightlx',
            title: 'COOP — FreightLX',
            subtitle: 'Internship',
            description: 'Comprehensive internship activity log documenting QA testing, UX feedback, documentation, and collaborative contributions to the FreightLX platform.',
            tags: ['QA Testing', 'UX Review', 'Documentation', 'Collaboration']
        },
        {
            id: 'current-work',
            title: "What I'm Working On",
            subtitle: 'Current Focus',
            description: 'Exploring new technologies, building side projects, and continuously learning to expand my skill set in web development and AI.',
            tags: ['Learning', 'Innovation', 'Side Projects']
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-description">
                    A showcase of my recent work, internship experience, and ongoing learning journey
                </p>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={project.id} className="col-lg-4 col-md-6">
                            <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                tags={project.tags}
                                projectId={project.id}
                                delay={index + 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
