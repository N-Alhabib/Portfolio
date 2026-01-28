import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ title, subtitle, description, tags, projectId, delay = 0 }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${projectId}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className={`project-card fade-in-up delay-${delay}`}>
            <div className="card h-100" onClick={handleClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleClick()}>
                <div className="card-body">
                    {subtitle && <div className="project-subtitle">{subtitle}</div>}
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>

                    {tags && tags.length > 0 && (
                        <div className="project-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="badge bg-primary">{tag}</span>
                            ))}
                        </div>
                    )}

                    <div className="view-details">
                        <span>View Details</span>
                        <FiArrowRight className="arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
