import React from "react";
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.logo}>Tickify</h3>
          <p className={styles.text}>
            Your gateway to the world's best live events and experiences.
          </p>
          <p className={styles.copy}>&copy; 2025 Tickify Inc.</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.list}>
            <li><a href="/events">Explore Events</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/organizers">Powered by Organizers</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Legal</h4>
          <ul className={styles.list}>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Support</h4>
          <ul className={styles.list}>
            <li>
              <a href="mailto:support@passly.co.ke">
                Email: support@passly.co.ke
              </a>
            </li>
            <li>
              <a href="tel:+254748735731">
                Call: +254 748 735 731
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Community</h4>
          <div className={styles.communityLinks}>
            <a href="[instagram-link]" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="[linkedin-link]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="[twitter-link]" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="[facebook-link]" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Get the App</h4>
          <a href="[app-store-link]" target="_blank" rel="noopener noreferrer" className={styles.appButton} style={{marginBottom: '10px'}}>
            App Store
          </a>
          <a href="[google-play-link]" target="_blank" rel="noopener noreferrer" className={styles.appButton}>
            Google Play
          </a>
        </div>
      </div>
      <p className={styles.bottomText}>
        Tickify is committed to connecting people with memorable experiences.
      </p>
    </footer>
  );
};

export default Footer;