import { useState, useEffect, useContext, useMemo } from "react";
import LanguageContext from "../../components/LanguageContext";
import "../styles/general.css";

// ✅ Move text data outside the component for efficiency
const texts = {
  en: {
    title: "Terminal",
    date: "Date",
    status: "Status",
    button: "Change Status",
    alert: "Status changed to: ",
    present: "Present",
    absent: "Absent",
  },
  de: {
    title: "Terminal",
    date: "Datum",
    status: "Status",
    button: "Status ändern",
    alert: "Status geändert auf: ",
    present: "Anwesend",
    absent: "Abwesend",
  },
};

function TerminalCard() {
  const { language } = useContext(LanguageContext);
  const currentTexts = useMemo(() => texts[language] || texts.en, [language]);

  // ✅ Ensure status updates when language changes
  const [status, setStatus] = useState(currentTexts.present);

  useEffect(() => {
    setStatus(currentTexts.present);
  }, [currentTexts]);

  const today = new Date().toLocaleDateString();

  const toggleStatus = () => {
    setStatus((prevStatus) => {
      const newStatus = prevStatus === currentTexts.present ? currentTexts.absent : currentTexts.present;
      return newStatus;
    });

    // ✅ Non-intrusive feedback instead of alert()
    document.getElementById("status-message").textContent = `${currentTexts.alert} ${status}`;
    setTimeout(() => {
      document.getElementById("status-message").textContent = "";
    }, 2000);
  };

  return (
    <div className="card-terminal-card">
      <h2>{currentTexts.title}</h2>
      <p>{currentTexts.date}: {today}</p>
      <p>{currentTexts.status}: <strong>{status}</strong></p>

      {/* ✅ Non-intrusive feedback message */}
      <p id="status-message" className="status-message"></p>

      <button onClick={toggleStatus} className="status-button" aria-label={currentTexts.button}>
        <i className="ri-navigation-line"></i> {currentTexts.button}
      </button>
    </div>
  );
}

export default TerminalCard;
