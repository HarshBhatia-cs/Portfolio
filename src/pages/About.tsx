import { User, GraduationCap, Coffee, Activity } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="about-section page-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <p className="lead-text">
                            I am a 21-year-old developer passionate about creating meaningful digital experiences.
                        </p>
                        <p className="body-text">
                            Currently in my 6th semester pursuing Computer Science Engineering from MRIIRS, Faridabad. Technology excites me, and I am always in awe of the change it drives in the world around us.
                        </p>

                        <div className="personal-touches">
                            <div className="touch-item">
                                <Coffee className="touch-icon" />
                                <span>Big Coffee Lover</span>
                            </div>
                            <div className="touch-item">
                                <Activity className="touch-icon" />
                                <span>Love playing & watching football</span>
                            </div>
                            <div className="touch-item">
                                <Activity className="touch-icon" />
                                <span>Big F1 fan⚡</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-cards fade-in-scale" style={{ animationDelay: '0.4s' }}>
                        <div className="info-card glass-panel">
                            <div className="card-icon-wrapper">
                                <GraduationCap size={32} className="card-icon" />
                            </div>
                            <h3>Education</h3>
                            <p className="card-highlight">B.Tech in Computer Science</p>
                            <p className="card-subtext">MRIIRS, Faridabad (6th Semester)</p>
                        </div>

                        <div className="info-card glass-panel">
                            <div className="card-icon-wrapper">
                                <User size={32} className="card-icon" />
                            </div>
                            <h3>Profile</h3>
                            <p className="card-highlight">20 Years Old</p>
                            <p className="card-subtext">Faridabad, Haryana</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
