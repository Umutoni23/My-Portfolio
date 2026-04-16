import { FaEnvelope, FaPhone, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-contact">
            <p>
              <FaEnvelope /> umutonileoncie37@gmail.com
            </p>
            <p>
              <FaPhone /> +250 791365439 | +250 798863710
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Umutoni23/Course-Management-System"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Leoncie Umutoni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
