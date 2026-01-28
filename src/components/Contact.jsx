import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form is non-functional as per requirements
        alert('This is a demo form. Form submission is not implemented yet.');
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                    Let's connect and discuss opportunities, projects, or just have a chat
                </p>

                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="contact-info fade-in-up">
                            <h3 className="mb-4">Contact Information</h3>
                            <p className="mb-4">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>

                            <div className="contact-item">
                                <FiMail className="contact-icon" />
                                <div>
                                    <h5>Email</h5>
                                    <a href="mailto:nawaf@example.com">nawaf@example.com</a>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="GitHub">
                                    <FiGithub />
                                </a>
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <FiLinkedin />
                                </a>
                                <a href="mailto:nawaf@example.com" className="social-link" aria-label="Email">
                                    <FiMail />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form className="contact-form fade-in-up delay-1" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                <FiSend className="me-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
