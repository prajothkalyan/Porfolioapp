import { useRef, useEffect, useState } from "react";
import Mypic from "./assets/Myimage.jpg";
import Github from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";
//import Aos from "aos";

const App = () => {
  
const [activeSection, setActiveSection] = useState("about");
const [menuOpen, setMenuOpen] = useState(false);
const aboutRef = useRef(null);
const portfolioRef = useRef(null);
const Experience = useRef(null);
const blogRef = useRef(null);
const Contact = useRef(null);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


useEffect(() => {
  const sections = [
    aboutRef,
    portfolioRef,
    Experience,
    blogRef,
    Contact,
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.8,
    }
  );

  sections.forEach((ref) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const handleScroll = () => {
    const sectionOffsets = [
      { id: "about", ref: aboutRef },
      { id: "portfolio", ref: portfolioRef },
      { id: "experience", ref: Experience },
      { id: "blog", ref: blogRef },
      { id: "contact", ref: Contact },
    ];

    const scrollPos = window.scrollY + window.innerHeight / 2;

    console.log(sectionOffsets.length)

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      const section = sectionOffsets[i];
      if (section.ref.current) {
        if (scrollPos >= section.ref.current.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3, // 30% visible
    }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  return (
    <>
    {/* TEMP BUTTONS (You can remove later & connect Navbar)
    
    <button onClick={() => scrollToSection(aboutRef)}>About</button>
    <button onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
		<button onClick={() => scrollToSection(Experience)}>Experience</button>
		<button onClick={() => scrollToSection(Contact)}>Contact</button>

     <div className="top-nav">
    <button className={activeSection === "about" ? "active" : ""}
    onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}>About</button>

    <button className={activeSection === "portfolio" ? "active" : ""}
    onClick={() => portfolioRef.current.scrollIntoView({ behavior: "smooth" })}>Portfolio</button>

		<button className={activeSection === "experience" ? "active" : ""}
    onClick={() => Experience.current.scrollIntoView({ behavior: "smooth" })}>Experience</button>

   <button className={activeSection === "blog" ? "active" : ""}
    onClick={() => blogRef.current.scrollIntoView({ behavior: "smooth" })}>Blog</button>

		<button className={activeSection === "contact" ? "active" : ""}
    onClick={() => Contact.current.scrollIntoView({ behavior: "smooth" })}>Contact</button>
  </div>

    
    */}
      
  <div className="top-nav-wrapper">

  {/* MOBILE MENU ICON */}
  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  {/* NAV BUTTONS */}
  <div className={`top-nav ${menuOpen ? "open" : ""}`}>
    <button
      className={activeSection === "about" ? "active" : ""}
      onClick={() => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      About
    </button>

    <button
      className={activeSection === "portfolio" ? "active" : ""}
      onClick={() => {
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Portfolio
    </button>

    <button
      className={activeSection === "experience" ? "active" : ""}
      onClick={() => {
        Experience.current.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Experience
    </button>

    <button
      className={activeSection === "blog" ? "active" : ""}
      onClick={() => {
        blogRef.current.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Blog
    </button>

    <button
      className={activeSection === "contact" ? "active" : ""}
      onClick={() => {
        Contact.current.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Contact
    </button>
  </div>

</div>


      {/* HERO */}
   <section ref={aboutRef} id="about" className="hero reveal" data-section="about" style={{ backdropFilter: `blur(${blur}px)`}}>
  <div className="hero-grid">
    
    {/* LEFT CONTENT */}
    <div className="hero-left">
      <h1 className="hero-name">Kalyan B</h1>
      <h2 className="hero-role">
        System Administrator <span>&</span> React Developer
      </h2>
      <p className="hero-desc">
        Passionate IT professional with 8+ years of experience in system
        administration, frontend development, and building modern, scalable
        React applications with a strong focus on UI/UX and performance.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hero-right">
      <div className="image-glow">
        <img
          src={Mypic}  /* replace with your image path */
          alt="Kalyan B"
          className="profile-img"
        />
      </div>
    </div>

  </div>
  
</section>
      
       {/* ABOUT CARDS */}
      <section className="about-ui reveal" style={{ backdropFilter: `blur(${blur}px)`}}>
        <h2 className="section-title">About Me</h2>

        <div className="card-grid">
          <div className="ui-card">💼 8+ Years Experience</div>
          <div className="ui-card">⚛️ React & UI Expert</div>
          <div className="ui-card">🐍 Python Developer</div>
          <div className="ui-card">🎮 Gaming PC Builder</div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills reveal">
        <h2 className="section-title">Skills</h2>

        <div className="skill">
          <span>React</span>
          <div className="bar"><span style={{ width: "95%" }} /></div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="bar"><span style={{ width: "90%" }} /></div>
        </div>

          <div className="skill">
          <span>NodeJs</span>
          <div className="bar"><span style={{ width: "80%" }} /></div>
        </div>

        <div className="skill">
          <span>Python</span>
          <div className="bar"><span style={{ width: "70%" }} /></div>
        </div>
     </section>

      {/* EXPERIENCE TIMELINE */}
       <section className="timeline reveal">
        <h2 className="section-title">Experience</h2>

        <div className="line">
          <div className="dot">2016</div>
          <div className="dot">2019</div>
          <div className="dot">2022</div>
          <div className="dot">2025</div>
        </div>
       </section>
     
  

	   {/* PORTFOLIO */}
      <section ref={portfolioRef} id="portfolio" data-section="portfolio" className="portfolio reveal">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio-grid">
          <div className="portfolio-card">
			<span className="icon-box">🚀</span>
            <h3>DevOps & Automation</h3>
            <p>
              Designing CI/CD pipelines using Jenkins, Azure DevOps, and GitHub
              Actions to accelerate deployments.
            </p>
          </div>

          <div className="portfolio-card">
			<span className="icon-box">☁️</span>
            <h3>Cloud Infrastructure</h3>
            <p>
              Architecting scalable AWS & Azure environments using Terraform
              and Infrastructure as Code.
            </p>
          </div>

          <div className="portfolio-card">
			<span className="icon-box">📈</span>
            <h3>Site Reliability Engineering</h3>
            <p>
              High availability systems using monitoring, alerting, and
              incident response with Datadog & Splunk.
            </p>
          </div>

          <div className="portfolio-card">
			<span className="icon-box">📦</span>
            <h3>Container Orchestration</h3>
            <p>
              Managing microservices with Docker & Kubernetes for seamless
              scaling and orchestration.
            </p>
          </div>

          <div className="portfolio-card">
			<span className="icon-box">👨‍💻</span>
            <h3>Consultant</h3>
            <p>
              Helping engineers build cloud-ready careers with hands-on
              mentoring and best practices.
            </p>
          </div>
        </div>

    <div className="tech-stack-inner reveal">
  <h2 className="sub-title">Tech Stack</h2>

  <div className="tech-grid">
    <div className="tech-card">☁️ AWS</div>
    <div className="tech-card">☁️ Azure</div>
    <div className="tech-card">🐳 Docker</div>
    <div className="tech-card">☸️ Kubernetes</div>
    <div className="tech-card">🌍 Terraform</div>
    <div className="tech-card">⚙️ Ansible</div>
    <div className="tech-card">🧪 Jenkins</div>
    <div className="tech-card">🚀 GitHub Actions</div>
    <div className="tech-card">📦 Octopus Deploy</div>
    <div className="tech-card">📊 Grafana</div>
    <div className="tech-card">🔍 Splunk</div>
    <div className="tech-card">📈 Datadog</div>
    <div className="tech-card">🐍 Python</div>
    <div className="tech-card">💻 Bash</div>
    <div className="tech-card">🐧 Linux</div>
    <div className="tech-card">🔗 Git</div>
   </div>
  </div>
</section>

      {/* EXPERIENCE SECTION */}
<section ref={Experience} id="experience" data-section="experience" className="expert reveal">
  <h2 className="section-title">Experience</h2>

  <div className="expert-list">

    {/* EXPERIENCE CARD 1 */}
    <div className="expert-card">
      <div className="expert-header">
        <h3>DevOps Engineer</h3>
        <span className="duration">2025 – Present</span>
      </div>

      <p className="company">Movate Technologies</p>

      <ul className="expert-points">
        <li>Implemented CI/CD pipelines using Azure CI/CD and GitHub Actions, reducing deployment time by <strong>40%</strong>.</li>
        <li>Managed AWS infrastructure using Terraform and CloudFormation.</li>
        <li>Maintained <strong>100% uptime</strong> across backend, frontend, and database workloads.</li>
        <li>Modernised configuration rollouts via pipelines and Octopus runbooks, reducing manual effort by <strong>40%</strong>.</li>
        <li>Engineered container workflows for <strong>50+ Docker containers</strong> using Kubernetes, optimizing compute usage by <strong>20%</strong>.</li>
        <li>Increased release frequency by <strong>50%</strong> and shortened launch cycles by <strong>45 minutes</strong>.</li>
        <li>Owned P1–P3 incident management, eliminating recurring production issues by <strong>50%</strong>.</li>
        <li>Designed Datadog dashboards, reducing infrastructure costs by <strong>15%</strong>.</li>
        <li>Collaborated with developers and infra teams to accelerate delivery and reduce costs.</li>
      </ul>
    </div>

    {/* EXPERIENCE CARD 2 */}
    <div className="expert-card">
      <div className="expert-header">
        <h3>Consultant</h3>
        <span className="duration">2025 – Present</span>
      </div>

      <p className="company">Freelancing</p>

      <ul className="expert-points">
        <li>Guided early-career engineers on AWS fundamentals, CI/CD workflows, and DevOps best practices.</li>
        <li>Explained DevOps learning paths, tool selection, and real-world expectations for entry-level roles.</li>
        <li>Reviewed resumes and project setups to align with industry hiring standards.</li>
        <li>Provided practical career guidance focused on interviews, skill-building, and production readiness.</li>
      </ul>
    </div>

  </div>
</section>

{/* BLOG SECTION */}
<section ref={blogRef} id="blog" data-section="blog" className="blog-section reveal">
  <h2 className="section-title">Blog</h2>

  <div className="blog-list">

    <article className="blog-card">
      <span className="blog-date">Oct 24, 2024</span>
      <h3>Difference between Serverless (AWS Lambda) and Containers</h3>
      <p>
        The key differences between serverless (AWS Lambda) and container-based
        architectures, focusing on deployment models, scalability, cost
        considerations, and operational responsibility. Helps engineers choose
        the right approach based on real-world workloads.
      </p>
    </article>

    <article className="blog-card">
      <span className="blog-date">Sep 15, 2024</span>
      <h3>Introduction to Infrastructure as Code</h3>
      <p>
        Why Infrastructure as Code is a game changer for modern DevOps teams
        and how to get started with Terraform.
      </p>
    </article>

    <article className="blog-card">
      <span className="blog-date">Aug 02, 2025</span>
      <h3>GitOps — A Beginner Guide</h3>
      <p>
        A beginner-friendly introduction to GitOps, explaining its principles,
        workflow, and why teams use it to manage infrastructure and deployments.
      </p>
    </article>

  </div>
</section>


{/* CONTACT SECTION */}
<section className="contact reveal" id="contact" ref={Contact} data-section="contact">
  <h2 className="section-title">Contact Me</h2>

  <p className="contact-text">
    Feel free to reach out for collaboration, consulting, or career guidance.
  </p>

  <div className="contact-cards">
    <div className="contact-card">
	<a className="contact-link">	
      <span className="contact-icon">📧</span>
      <h3>Email</h3>
      <p>kalyan2193@gmail.com</p>
     </a>
    </div>

    <div className="contact-card">
	 <a className="contact-link">
      <span className="contact-icon">📞</span>
      <h3>Phone</h3>
      <p>+91 7598111112</p>
	  </a>
    </div>

    <div className="contact-card">
  <a
    href="https://www.linkedin.com/in/kalyan-b-b54b83216/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
  >
    <span className="contact-icon">
      <img src={Linkedin} width="40px" alt="github logo" />
    </span>
    <h3>LinkedIn</h3>
	
  </a>
</div>

   <div className="contact-card">
  <a
    href="https://www.github.com/prajothkalyan?tab=repositories/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
  >
    <span className="contact-icon">
       <img src={Github} width="40px" alt="github logo" />
	</span>
    <h3>Github</h3>
    
  </a>
  </div>
 </div>

</section>

{/* DOWNLOAD CV */}
  <section>
   <div className="cv-download reveal">
  <a
    href="/Resume - Kalyan Balasubramanian.pdf"
    download
    className="cv-btn"
  >
    ⬇ Download CV
  </a>
 </div>
  </section>

{/* FOOTER */}
      <footer className="footer">
        © 2025 Kalyan B
      </footer>


      

      {/* ================= CSS ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        body {
          background: #050919ff;
          color: #e5e7eb;
        }

        section {
          padding: 5rem 1.5rem;
          text-align: center;
        }


		/* TOP FLOAT NAV BUTTONS */


.top-nav-wrapper {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: rgba(15,23,42,0.7);
  color: #07b6d9ff;
  border: 1px solid rgba(57, 188, 232, 0.4);
  border-radius: 25%;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  backdrop-filter: blur(20px);
}



.top-nav {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 12px;
  z-index: 1000;
}

.top-nav button {
  padding: 0.55rem 1.4rem;
  border-radius: 30px;
  border: 1px solid rgba(56,189,248,0.4);
  background: rgba(15,23,42,0.7);
  color: #38bdf8;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(40px);
  transition: all 0.3s ease;
}

.top-nav button:hover {
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  color: #020617;
  box-shadow: 0 0 25px rgba(56,189,248,0.9);
  transform: translateY(-2px);
}

.top-nav button.active {
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  color: #020617;
  box-shadow: 0 0 25px rgba(56,189,248,1);
  border-color: transparent;
  animation: glow 2s infinite;
}

        /* HERO GRID */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #050919ff;
        }

        .hero-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          padding: 2rem;
        }

         /* LEFT SIDE */
       .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          animation: fadeLeft 1.2s ease forwards;
        }

        .hero-name {
           font-size: 3.5rem;
           color: #38bdf8;
          text-shadow: 0 0 25px rgba(56,189,248,0.8);
        }

         .hero-role {
           font-size: 1.8rem;
           margin: 1rem 0;
          color: #e5e7eb;
       }

        .hero-role span {
  color: #38bdf8;
}

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 520px;
  opacity: 0.85;
}

/* RIGHT SIDE IMAGE */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-glow {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(115deg, #38bdf8, #22d3ee);
  box-shadow: 0 0 80px rgba(56,189,248,0.9);
  animation: floatImage 4s ease-in-out infinite;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: #000;
}

/* ANIMATIONS */
@keyframes floatImage {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

  /* ABOUT UI */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: auto;
        }

        .ui-card {
          padding: 2rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #0f172a, #020617);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          transition: transform 0.4s ease;
        }

        .ui-card:hover {
          transform: translateY(-12px) scale(1.03);
        }

        /* SKILLS */
        .skills {
          max-width: 600px;
          margin: auto;
        }

        .skill {
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .bar {
          background: #1e293b;
          height: 10px;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 0.4rem;
        }

        .bar span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #22d3ee);
          animation: fill 2s ease forwards;
        }

        /* TIMELINE */
        .line {
          display: flex;
          justify-content: space-between;
          max-width: 700px;
          margin: auto;
          position: relative;
        }

        .line::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 100%;
          height: 2px;
          background: #334155;
        }

        .dot {
          background: #38bdf8;
          padding: 0.6rem 1rem;
          border-radius: 20px;
          z-index: 1;
          animation: glow 2s infinite;
        }

        /* FOOTER */
        .footer {
          padding: 2rem;
          background: #020617;
          opacity: 0.7;
        }

        /* TITLES */
        .section-title {
          font-size: 2rem;
          margin-bottom: 2.5rem;
        }

        /* ANIMATIONS */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fill {
          from { width: 0; }
        }

        @keyframes glow {
          0%,100% { box-shadow: 0 0 10px #38bdf8; }
          50% { box-shadow: 0 0 25px #38bdf8; }
        }

        @keyframes pop {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.4rem;
          }
      }
         /* HERO BUTTON */
.hero-btn {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  color: #020617;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  box-shadow: 0 0 25px rgba(56,189,248,0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 40px rgba(56,189,248,1);
}




/* PORTFOLIO SECTION */
.portfolio {
  background: #050919ff;
  padding: 6rem 1.5rem;
  text-align: center;
}

.portfolio-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.portfolio-card {
  background: linear-gradient(135deg, #0f172a, #020617);
  border-radius: 20px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
}

.portfolio-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(120deg, transparent, rgba(56,189,248,0.25), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-card:hover::before {
  opacity: 1;
}

.portfolio-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 35px 70px rgba(56,189,248,0.4);
}

.portfolio-card h3 {
  color: #38bdf8;
  margin-bottom: 0.8rem;
}

.portfolio-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* CARD HEADER WITH ICON */
.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
}

/* ICON BOX */
.icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: rgba(56, 189, 248, 0.15);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.6);
  flex-shrink: 0;
}

/* Keep heading aligned */
.portfolio-card h3 {
  margin: 0;
  color: #38bdf8;
  font-size: 1.15rem;
}

/* ================= TECH STACK ================= */
.tech-stack-inner {
  background: #050919ff;
  margin-top: 5rem;
  padding-top: 3rem;
  margin-bottom: 70px;
  border-top: 1px solid rgba(56,189,248,0.15);
  }

.sub-title {
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  color: #38bdf8;
}
.tech-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.8rem;
}

/* Tech Card */
.tech-card {
  background: linear-gradient(135deg, #0f172a, #020617);
  border-radius: 16px;
  padding: 1.4rem 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #e5e7eb;
  border: 1px solid rgba(56,189,248,0.15);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

/* Hover Effect */
.tech-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 30px 60px rgba(56,189,248,0.45);
  color: #38bdf8;
}


/* ================= EXPERIENCE ================= */
.expert {
  background: #050919ff;
  padding: 2rem 0.5rem;
  margin-bottom: 20px;
}

.expert-list {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.expert-card {
  background: linear-gradient(135deg, #0f172a, #020617);
  border-radius: 22px;
  padding: 2.5rem;
  box-shadow: 0 30px 70px rgba(0,0,0,0.7);
  border-left: 4px solid #38bdf8;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.expert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 40px 90px rgba(56,189,248,0.45);
}

/* HEADER */
.expert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.expert-header h3 {
  color: #38bdf8;
  font-size: 1.4rem;
}

.duration {
  font-size: 0.85rem;
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  background: rgba(56,189,248,0.15);
  color: #38bdf8;
}

/* COMPANY */
.company {
  margin: 0.6rem 0 1.4rem;
  font-weight: 500;
  opacity: 0.85;
}

/* BULLETS */
.expert-points {
  list-style: none;
  padding-left: 0;
}

.expert-points li {
  position: relative;
  padding-left: 1.6rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
}

.expert-points li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #38bdf8;
  font-size: 1.2rem;
}

.expert-points strong {
  color: #38bdf8;
}

/* ================= BLOG ================= */
.blog-section {
  background: #050919ff;
  padding: 6rem 1.5rem;
  margin-bottom: 50px;
  text-align: center;
}

.blog-list {
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

/* Blog Card */
.blog-card {
  background: linear-gradient(135deg, #0f172a, #020617);
  border-radius: 20px;
  padding: 2.2rem;
  text-align: left;
  border: 1px solid rgba(56,189,248,0.15);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  position: relative;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(56,189,248,0.45);
}

/* Date */
.blog-date {
  display: inline-block;
  font-size: 0.75rem;
  margin-bottom: 0.8rem;
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  background: rgba(56,189,248,0.15);
  color: #38bdf8;
}

/* Title */
.blog-card h3 {
  margin-bottom: 0.8rem;
  color: #e5e7eb;
  line-height: 1.4;
}

/* Description */
.blog-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}


/* ================= CONTACT ================= */
.contact {
  background: #050919ff;
  padding: 6rem 1.5rem;
  margin-bottom: -100px;
  text-align: center;
}

.contact-text {
  max-width: 500px;
  margin: 0 auto 3rem;
  opacity: 0.85;
  line-height: 1.6;
}

.contact-cards {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 👈 FIXED columns */
  gap: 2rem;
  align-items: stretch;
}

.contact-card {
  min-height: 220px;              /* SAME HEIGHT */
  background: linear-gradient(135deg, #0f172a, #020617);
  border-radius: 20px;
  padding: 0;                     /* IMPORTANT */
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid rgba(56,189,248,0.15);
}

.contact-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 35px 70px rgba(56,189,248,0.45);
}

.contact-icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: 1rem;
  background: rgba(56,189,248,0.15);
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(56,189,248,0.6);
}

.contact-card h3 {
  color: #38bdf8;
  margin-bottom: 0.4rem;
}

.contact-card p {
  font-size: 0.8rem;
  work-break: break-all;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.contact-link {
  width: 100%;
  height: 100%;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
  text-align: center;
}

/* CV DOWNLOAD */
.cv-download {
  margin-top: 4rem;
  height: 5px;
  text-align: center;
}

.cv-btn {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: #020617;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  box-shadow: 0 0 30px rgba(56,189,248,0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: floatImage 4s ease-in-out infinite;
}

.cv-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 50px rgba(56,189,248,1);
}

/* REVEAL BASE STATE */
.reveal {
  opacity: 0;
  transform: translateY(60px) scale(0.96);
  transition: all 0.8s ease;
}

/* WHEN VISIBLE */
.reveal.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.reveal-left {
  transform: translateX(-80px);
}

.reveal-right {
  transform: translateX(80px);
}

.reveal-left.show,
.reveal-right.show {
  transform: translateX(0);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: block;
  }

  .top-nav {
    position: absolute;
    top: 50px;
    right: 0;
    flex-direction: column;
    background: rgba(2,6,23,0.95);
    padding: 1rem;
    border-radius: 16px;
    gap: 10px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.7);

    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }

  .top-nav.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .top-nav button {
    width: 300px;
    padding : 20px 20px;
    font-size: 1.08rem;
    gap : 50px;
    justify-content: center;
  }
}



@media (max-width: 900px) {
  .contact-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .contact-cards {
    grid-template-columns: 1fr;
  }
}


/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-desc {
    margin: auto;
  }
 }


 @media (max-width: 400px) {
  .portfolio-grid {
    gap: 1.2rem;
    grid-template-columns: 1fr;
  }

  .portfolio-card {
    padding: 1.4rem;
    text-align: center; /* better mobile UX */
  }

}


@media (max-width: 400px) {
  .tech-stack-inner {
    margin-top: 4rem;
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.4rem;
  }

  .tech-card {
    font-size: 0.9rem;
    padding: 1.2rem 0.8rem;
  }
}

      `}</style>
    </>
  );
};

export default App;


/*
const [blur, setBlur] = useState(0)

useEffect(() => {
  Scroll effect
 const handleScroll = () => {
    const scrollY = window.scrollY;
    setBlur(Math.min(scrollY / 40, 10));
  };

  window.addEventListener("scroll", handleScroll);

  // AOS init
  const timer = setTimeout(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      once: false,
    });
    Aos.refresh();
  }, 100);

  // Cleanup
  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timer);
  };
}, []); */









