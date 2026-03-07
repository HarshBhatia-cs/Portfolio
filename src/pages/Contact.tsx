import { MapPin, Phone, Mail, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section page-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just a quick chat.</p>
                </div>

                <div className="contact-layout">
                    {/* Contact Info */}
                    <div className="contact-info-container fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="contact-card glass-panel">
                            <div className="contact-icon-wrapper">
                                <Phone className="contact-icon" />
                            </div>
                            <div className="contact-details">
                                <h3>Call Me</h3>
                                <p>+91 9311434725</p>
                            </div>
                        </div>

                        <div className="contact-card glass-panel">
                            <div className="contact-icon-wrapper">
                                <Mail className="contact-icon" />
                            </div>
                            <div className="contact-details">
                                <h3>Email Me</h3>
                                <p>harshbhatia318@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-card glass-panel">
                            <div className="contact-icon-wrapper">
                                <MapPin className="contact-icon" />
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Flat no. 1205, Tower 7, Adore Happy Homes Grand, Sector 85, Faridabad, Haryana</p>
                            </div>
                        </div>

                        <div className="social-links glass-panel">
                            <p>Connect professionally</p>
                            <a
                                href="https://www.linkedin.com/in/harsh-bhatia-12a614283"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary linkedin-btn"
                            >
                                <Linkedin size={20} /> LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    {/* Decorative Form Image/Mockup */}
                    <div className="contact-visual fade-in-scale" style={{ animationDelay: '0.4s' }}>
                        <div className="decorative-form glass-panel">
                            <div className="form-header">
                                <h3>Send a Message</h3>
                                <p>I typically reply within 24 hours.</p>
                            </div>
                            <div className="mock-input">
                                <div className="mock-label">Name</div>
                                <div className="mock-field"></div>
                            </div>
                            <div className="mock-input">
                                <div className="mock-label">Email</div>
                                <div className="mock-field"></div>
                            </div>
                            <div className="mock-input">
                                <div className="mock-label">Message</div>
                                <div className="mock-field area"></div>
                            </div>
                            <button className="btn btn-primary submit-btn">
                                <Send size={18} /> Send Message
                            </button>
                        </div>

                        {/* Background elements */}
                        <div className="glow-orb contact-orb"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
