import { NavLink } from "react-router-dom";
import { ArrowRight as ArrowRightIcon, Terminal } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section page-section">
      <div className="container home-container">
        <div className="home-content">
          <div
            className="greeting fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="hello-badge">
              <Terminal size={16} /> Hello World!
            </span>
          </div>

          <h1
            className="hero-title fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm <span className="text-gradient">Harsh Bhatia</span>
          </h1>

          <h2
            className="hero-subtitle fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Trying to make "Hello World" the new "abc"
          </h2>

          <p
            className="hero-description fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I am a enthusiastic{" "}
            <span className="highlight">MERN Full Stack Developer</span> eager
            to create real-world impact through technology and modern web
            experiences.
          </p>

          <div
            className="hero-actions fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <NavLink to="/projects" className="btn btn-primary">
              View My Work <ArrowRightIcon size={20} />
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Let's Connect
            </NavLink>
          </div>
        </div>

        <div
          className="home-visual fade-in-scale"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glow-orb"></div>
          <div className="glass-card main-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
                <span className="keyword">const</span>{" "}
                <span className="variable">developer</span> = {"{"}
                <br />
                {"  "}name: <span className="string">'Harsh Bhatia'</span>,
                <br />
                {"  "}role:{" "}
                <span className="string">'Full Stack Developer'</span>,
                <br />
                {"  "}stack: [<span className="string">'MongoDB'</span>,{" "}
                <span className="string">'Express'</span>,{" "}
                <span className="string">'React'</span>,{" "}
                <span className="string">'Node.js'</span>],
                <br />
                {"  "}passion:{" "}
                <span className="string">'Real-world impact'</span>
                <br />
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
