import 'remixicon/fonts/remixicon.css';
import './flashcard.css';
import ProfilePic from '../../assets/images/profile.jpg';

export function Flashcard() {
  return (
    <div className="flashcard-content">
      <img src={ProfilePic} alt="Profile" className="profile-image" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <div className="socials">
        <a href="mailto:laura.smith@example.com" className="button email-link">
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
    </div>
  );
}
