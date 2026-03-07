import { Code2, Database, Layout, Terminal as TerminalIcon, Award, UserPlus } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Core Languages",
            icon: <TerminalIcon size={24} />,
            skills: ["Java (Fluent)", "JavaScript", "TypeScript", "Python (Familiarity)"]
        },
        {
            title: "Web Development (MERN)",
            icon: <Layout size={24} />,
            skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js"]
        },
        {
            title: "Databases",
            icon: <Database size={24} />,
            skills: ["MongoDB", "SQL", "MySQL"]
        },
        {
            title: "CS Fundamentals",
            icon: <Code2 size={24} />,
            skills: ["Object Oriented Programming", "Data Structures & Algorithms", "Operating Systems", "Linux OS"]
        }
    ];

    return (
        <section className="skills-section page-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">A comprehensive view of my technical expertise and familiarities.</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-card glass-panel fade-in-up"
                            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-bullet"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="achievements-section fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="achievement-block">
                        <div className="achievement-icon">
                            <Award size={28} />
                        </div>
                        <div className="achievement-content">
                            <h3>Certifications</h3>
                            <p>Deloitte Australia - Data Analytics Job Simulation</p>
                        </div>
                    </div>

                    <div className="achievement-block">
                        <div className="achievement-icon">
                            <UserPlus size={28} />
                        </div>
                        <div className="achievement-content">
                            <h3>Soft Skills</h3>
                            <p>Strong Communication &bull; Analytical Problem-Solving &bull; Team Collaboration</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
