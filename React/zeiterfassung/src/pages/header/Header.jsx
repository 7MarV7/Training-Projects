import { useContext } from 'react';
import { LanguageContext } from '../../functions/LanguageContext';
import '../styles/header.css';

// Language options for dynamic rendering
const languages = [
  {
    code: 'de',
    label: 'Deutsch',
    img: '/images/germany.png',
    aria: 'Switch to German',
  },
  {
    code: 'en',
    label: 'English',
    img: '/images/united-states.png',
    aria: 'Switch to English',
  },
];

function Header() {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <header className="header" aria-label="Application Header">
      <h1>
        {language === 'de'
          ? 'Zeiterfassungssoftware'
          : 'Time Tracking Software'}
      </h1>
      <div className="header-actions">
        <div className="language-selector">
          {languages.map(({ code, label, img, aria }) => (
            <button
              key={code}
              className="languageButton"
              onClick={() => handleLanguageChange?.(code)}
              aria-label={aria}
            >
              <img src={img} alt={label} className="flag" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
