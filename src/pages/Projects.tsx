import { Trophy, GitBranch } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const achievements = [
        {
            title: "Unstop HackShastra 2025",
            position: "Runner Up (#2 Finish)",
            description: "Secured second place in a highly competitive pan-India hackathon.",
            icon: <Trophy className="text-yellow" />
        },
        {
            title: "TCU Verse",
            position: "2nd Runner Up",
            description: "Demonstrated innovative problem-solving and technical execution.",
            icon: <Trophy className="text-bronze" />
        },
        {
            title: "ICASS 2026",
            position: "Runner Up",
            description: "Recognized for outstanding technical contribution and final presentation.",
            icon: <Trophy className="text-silver" />
        },
        {
            title: "Science Sustainova 2026",
            position: "2nd Runner Up",
            description: "Recognized for outstanding IOT based solution.",
            icon: <Trophy className="text-bronze" />
        }
    ];

    const projects = [
        {
            title: "Smart Spirulina Growng Tank System",
            type: "IOT Device",
            description: "An AI-powered patented tank system to cultivate spirulina in fully automated way without any human intervention and contamination.",
            tags: ["AI", "Data Analysis", "MERN Stack", "IOT"]
        },
        {
            title: "Mama Pulse",
            type: "Hackathon Project",
            description: "A web application to track the health of the pregnant mother and child.",
            tags: ["TypeScript", "React", "Node.js"]
        },
        {
            title: "Rossobrunello.com Analysis",
            type: "Web Analysis Project",
            description: "Conducted a comprehensive web analysis evaluating user experience, performance metrics, and technical SEO architecture to recommend critical improvements.",
            tags: ["Web Analytics", "SEO", "Performance Optimization"]
        }
    ];

    return (
        <section className="projects-section page-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Projects & <span className="text-gradient">Achievements</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="content-layout">
                    {/* Achievements Column */}
                    <div className="achievements-column fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="column-title">
                            <Trophy size={24} className="title-icon" />
                            Hackathons & Awards
                        </h3>
                        <div className="timeline">
                            {achievements.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot">
                                        {item.icon}
                                    </div>
                                    <div className="timeline-content glass-panel">
                                        <h4>{item.title}</h4>
                                        <span className="position-badge">{item.position}</span>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Column */}
                    <div className="projects-column fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h3 className="column-title">
                            <GitBranch size={24} className="title-icon" />
                            Key Projects
                        </h3>
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card glass-panel">
                                    <div className="project-header">
                                        <h4>{project.title}</h4>
                                        <span className="project-type">{project.type}</span>
                                    </div>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
