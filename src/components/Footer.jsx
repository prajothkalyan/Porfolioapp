import { contactInfo } from "../data/contact";

const Footer = () => {
  return (
    <>
      <footer className="footer-animated" id="contact">
        <div className="footer-content">
          <h3 className="footer-title">Kalyan B</h3>

          <div className="footer-info">
            <p>📧 <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p>📞 <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
          </div>

          <p className="footer-copy">
            © 2025 Kalyan B. All rights reserved.
          </p>
        </div>

        {/* Glow layer */}
        <span className="glow" />
      </footer>

      <style>{`
        .footer-animated {
          position: relative;
          overflow: hidden;
          padding: 4rem 1rem;
          background: linear-gradient(270deg, #020617, #0f172a, #020617);
          background-size: 600% 600%;
          animation: gradientMove 12s ease infinite;
          color: #e5e7eb;
          text-align: center;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .footer-content {
          position: relative;
          z-index: 2;
          animation: floatUp 3s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .footer-title {
          font-size: 2rem;
          letter-spacing: 1.5px;
          margin-bottom: 1.2rem;
          animation: glowText 2.5s ease-in-out infinite;
        }

        @keyframes glowText {
          0%, 100% { text-shadow: 0 0 10px rgba(56,189,248,0.4); }
          50% { text-shadow: 0 0 25px rgba(56,189,248,0.9); }
        }

        .footer-info {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .footer-info a {
          color: #38bdf8;
          text-decoration: none;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-info a:hover {
          color: #22d3ee;
          transform: translateY(-3px);
        }

        .footer-copy {
          font-size: 0.9rem;
          opacity: 0.85;
        }

        /* Glow animation layer */
        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(56,189,248,0.15), transparent 70%);
          animation: pulse 4s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        /* Responsive */
        @media (max-width: 600px) {
          .footer-title {
            font-size: 1.6rem;
          }
          .footer-info {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
