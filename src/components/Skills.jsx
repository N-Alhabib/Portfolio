import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'DevOps & CI/CD',
            skills: ['GitHub Actions', 'Docker', 'Apache', 'CI/CD Pipelines', 'Environment Configuration']
        },
        {
            title: 'Data & AI',
            skills: ['Python', 'scikit-learn', 'Drain3', 'pandas', 'NumPy', 'Log Analysis', 'Anomaly Detection']
        },
        {
            title: 'Development & APIs',
            skills: ['JavaScript', 'HTML', 'CSS', 'React', 'REST APIs', 'API Testing', 'Git', 'GitHub']
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-description">
                    A diverse toolkit for building modern, scalable applications
                </p>

                <div className="row g-4">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className={`skill-category fade-in-up delay-${index + 1}`}>
                                <h3 className="category-title">{category.title}</h3>
                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-chip">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
