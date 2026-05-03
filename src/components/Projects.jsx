import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 'log-analyzer',
            title: 'Intelligent Log Files Analyzer',
            subtitle: 'Graduation Project',
            description: 'AI-powered log anomaly detection system achieving up to 95% accuracy across 3 benchmark datasets. Built an end-to-end pipeline covering log ingestion, parsing with Drain3, and ML-based anomaly detection.',
            tags: ['Python', 'scikit-learn', 'Drain3', 'pandas', 'NumPy']
        },
        {
            id: 'freightlx',
            title: 'IT Intern — FreightLX',
            subtitle: 'DevOps & Platform Operations',
            description: 'Led a CI/CD initiative using GitHub Actions across staging and production. Integrated 12 sea ports into the freight search platform and configured deployment environments with Docker and Apache.',
            tags: ['GitHub Actions', 'Docker', 'Apache', 'CI/CD', 'REST APIs']
        },
        {
            id: 'current-work',
            title: "What I'm Working On",
            subtitle: 'Current Focus',
            description: 'Deepening DevOps expertise, exploring cloud infrastructure, and building projects that bridge automation and AI — applying lessons from my internship and graduation project.',
            tags: ['DevOps', 'Cloud', 'Automation', 'AI']
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
