import { contactInfo } from "../data/contact";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <h1>Contact Me</h1>

      <div className="contact-box">
        <p>📧 Email: {contactInfo.email}</p>
        <p>📞 Phone: {contactInfo.phone}</p>

        <div className="social-links">
          <a href={contactInfo.linkedin} target="_blank">
            LinkedIn
          </a>
          <a href={contactInfo.github} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
