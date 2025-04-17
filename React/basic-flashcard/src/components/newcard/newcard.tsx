import React from 'react';
import './newcard.css';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS
import avatar from 'assets/images/profile.jpg';

export default function NewCard() {
  return (
    <div className="card-container">
      <div className="card-content">
        <img src={avatar} alt="Avatar" />
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>

        <div className="socials">
          <a
            href="mailto:laura.smith@example.com"
            className="button email-link"
          >
            <i className="ri-mail-line"></i> Email
          </a>
          <a
            href="https://linkedin.com/in/laura-smith"
            target="_blank"
            rel="noopener noreferrer"
            className="button linkedin-link"
          >
            <i className="ri-linkedin-box-line"></i> LinkedIn
          </a>
        </div>
        <div className="user-description">
          <h1>About</h1>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            modi non iusto mollitia reiciendis fuga quod iure reprehenderit
            excepturi, eos dolorum facilis asperiores omnis error?
          </article>

          <h1>Interests</h1>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            modi non iusto mollitia reiciendis fuga quod iure reprehenderit
            excepturi, eos dolorum facilis asperiores omnis error?
          </article>
        </div>
        <footer>
          <div className="footer-content">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
            >
              <i className="ri-twitter-line"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
            >
              <i className="ri-facebook-line"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
