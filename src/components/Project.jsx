import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/Project4.png";


const Main = () => {
  return (
    <>
      <div className="project-container">
        {/* Background */}
        
        <div className="overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h2>Projects</h2>

          <div className="cards-wrapper">
            <div className="card">
              <img src={project1} alt="React logo" />
              <h3>React Projects</h3>
              <p>React-based personal portfolio</p>
            </div>

            <div className="card">
              <img src={project2} alt="Python projects" />
              <h3>Python Projects</h3>
              <p>List of Projects in Python</p>
            </div>

            <div className="card">
              <img src={project3} alt="Automation Scripts" />
              <h3>Powershell & Bash</h3>
              <p>PowerShell & Bash automation</p>
            </div>

            <div className="card">
              <img src={project4} alt="Nodejs projects" />
              <h3>NodeJs Projects</h3>
              <p>List of Projects in NodeJs</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        /* CONTAINER */
        .project-container {
          position: relative;
          height: 80vh;
          width: 100%;
          overflow: hidden;
          color: white;
          background: #000;
        }

        /* BACKGROUND */
        .background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: bgZoom 18s ease-in-out infinite;
        }

        @keyframes bgZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(2,6,23,0.75),
            rgba(2,6,23,0.9)
          );
          z-index: 1;
        }

        /* CONTENT */
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding-top: 3rem;
          animation: heroFade 1.2s ease forwards;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #38bdf8;
          letter-spacing: 1.5px;
          animation: glowText 2.5s ease-in-out infinite;
        }

        @keyframes glowText {
          0%,100% { text-shadow: 0 0 10px rgba(56,189,248,0.4); }
          50% { text-shadow: 0 0 25px rgba(56,189,248,0.9); }
        }

        /* CARDS */
        .cards-wrapper {
          position: absolute;
          bottom: -370px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 3;
        }

        .card {
          width: 270px;
          height: 330px;
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
          transform: translateY(60px);
          opacity: 0;
          animation: cardReveal 0.8s ease forwards, floatCard 4s ease-in-out infinite;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .card:nth-child(1) { animation-delay: 0.2s; }
        .card:nth-child(2) { animation-delay: 0.4s; }
        .card:nth-child(3) { animation-delay: 0.6s; }
        .card:nth-child(4) { animation-delay: 0.8s; }

        @keyframes cardReveal {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes floatCard {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 30px 70px rgba(56,189,248,0.45);
        }

        .card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover img {
          transform: scale(1.1);
        }

        .card h3 {
          margin: 15px 0 5px;
          color: #020617;
        }

        .card p {
          padding: 0 15px;
          font-size: 14px;
          color: #111;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .cards-wrapper {
            position: static;
            transform: none;
            margin-top: 3rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .project-container {
            height: auto;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </>
  );
};

export default Main;
