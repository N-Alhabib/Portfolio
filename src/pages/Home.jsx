import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>&copy; 2026 Nawaf Alhabib. All rights reserved.</p>
                        <p className="text-muted">Built with React, Bootstrap, and passion for great UX</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
