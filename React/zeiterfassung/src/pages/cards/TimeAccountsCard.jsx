import { useState, useMemo, useContext } from "react";
import "../styles/general.css";
import LanguageContext from "../../components/LanguageContext";

// ✅ Move translations outside for better performance
const texts = {
  en: {
    title: "Time Accounts",
    balance: "Balance",
    hours: "(Over/Under hours)",
    button: "Overview of recorded times",
    alert: "Overview of recorded times will be opened.",
    increase: "Increase Hours",
    decrease: "Decrease Hours",
  },
  de: {
    title: "Zeitkonten",
    balance: "Saldo",
    hours: "(Über-/Fehlstunden)",
    button: "Übersicht erfasste Zeiten",
    alert: "Übersicht erfasste Zeiten wird geöffnet.",
    increase: "Stunden erhöhen",
    decrease: "Stunden verringern",
  },
};

function TimeAccountsCard() {
  const { language } = useContext(LanguageContext);
  const currentTexts = useMemo(() => texts[language] || texts.en, [language]);

  // ✅ Allow balance to change dynamically
  const [balance, setBalance] = useState(2.5);

  const handleOpenTimeOverview = () => {
    document.getElementById("time-message").textContent = currentTexts.alert;
  };

  return (
    <div className="card-time-card">
      <h2>{currentTexts.title}</h2>
      <p>
        {currentTexts.balance}:{" "}
        <span className={balance >= 0 ? "positive-balance" : "negative-balance"}>
          {balance.toFixed(1)}
        </span>
      </p>
      <p>{currentTexts.hours}</p>

      {/* ✅ Buttons to update balance dynamically */}
      <div className="balance-controls">
        <button onClick={() => setBalance((prev) => prev + 0.5)}>{currentTexts.increase}</button>
        <button onClick={() => setBalance((prev) => prev - 0.5)}>{currentTexts.decrease}</button>
      </div>

      {/* ✅ Non-intrusive feedback message */}
      <p id="time-message" className="time-message"></p>

      <button onClick={handleOpenTimeOverview} className="time-button" aria-label={currentTexts.button}>
        <i className="ri-navigation-line"></i> {currentTexts.button}
      </button>
    </div>
  );
}

export default TimeAccountsCard;
