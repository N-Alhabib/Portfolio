import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'n.alhabib1@outlook.com',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
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
                                    <a href="mailto:n.alhabib1@outlook.com">n.alhabib1@outlook.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FiPhone className="contact-icon" />
                                <div>
                                    <h5>Phone</h5>
                                    <a href="tel:0558034707">0558034707</a>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="https://github.com/N-Alhabib" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FiGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/nawaf-alhabib" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FiLinkedin />
                                </a>
                                <a href="mailto:n.alhabib1@outlook.com" className="social-link" aria-label="Email">
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

                            {status === 'success' && (
                                <div className="alert alert-success mb-3" role="alert">
                                    Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="alert alert-danger mb-3" role="alert">
                                    Something went wrong. Please try again or email me directly.
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary w-100" disabled={status === 'sending'}>
                                <FiSend className="me-2" />
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
