import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Front-end',
            skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'UI/UX']
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git', 'VS Code', 'npm', 'Vite', 'Chrome DevTools', 'Figma']
        },
        {
            title: 'AI/ML & Backend',
            skills: ['Python', 'Machine Learning', 'Data Analysis', 'Node.js', 'APIs', 'Testing']
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
