import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div>
            <button onClick={() => toggleLanguage(language === "en" ? "de" : "en")}>
                {language === "en" ? "Switch to German" : "Switch to English"}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
