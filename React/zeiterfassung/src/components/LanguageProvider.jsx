import { useState } from "react";
import PropTypes from "prop-types";
import LanguageContext from "./LanguageContext"; // ✅ Import Context

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider; // ✅ Default export
