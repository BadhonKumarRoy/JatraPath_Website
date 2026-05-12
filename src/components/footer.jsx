// import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>JatraPath</h2>
          <p>
            Discover hidden gems, plan smarter journeys, and explore the world
            with confidence.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/packages">Packages</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/jatrapath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook /> <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/jatrapath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>

            <a
              href="https://www.twitter.com/jatrapath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter /> <span>X</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 JatraPath. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;