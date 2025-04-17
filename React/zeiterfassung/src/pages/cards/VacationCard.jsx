import { useContext, useMemo } from "react";
import "../styles/general.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LanguageContext from "../../components/LanguageContext";

ChartJS.register(ArcElement, Tooltip, Legend);

// ✅ Move text data outside the component
const texts = {
  en: {
    vacationEntitlement: "Vacation Entitlement",
    vacationTaken: "Vacation Taken",
    vacationPlanned: "Vacation Planned",
    remainingVacation: "Remaining Vacation",
    total: "Total",
    days: "days",
    button: "Open Vacation Overview",
    alert: "Vacation overview is opening.",
  },
  de: {
    vacationEntitlement: "Urlaubsanspruch",
    vacationTaken: "Urlaub genommen",
    vacationPlanned: "Urlaub geplant",
    remainingVacation: "Resturlaub",
    total: "Gesamt",
    days: "Tage",
    button: "Urlaubsübersicht öffnen",
    alert: "Urlaubsübersicht wird geöffnet.",
  },
};

function VacationCard() {
  const { language } = useContext(LanguageContext);
  const currentTexts = useMemo(() => texts[language] || texts.en, [language]);

  // ✅ Vacation Data (can be dynamic later)
  const vacationData = useMemo(
    () => ({
      total: 25,
      taken: 15,
      planned: 5,
      remaining: 25 - (15 + 5),
    }),
    []
  );

  // ✅ Chart Data (memoized for better performance)
  const chartData = useMemo(
    () => ({
      labels: [currentTexts.vacationTaken, currentTexts.vacationPlanned, currentTexts.remainingVacation],
      datasets: [
        {
          data: [vacationData.taken, vacationData.planned, vacationData.remaining],
          backgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0"],
        },
      ],
    }),
    [vacationData, currentTexts]
  );

  const handleOpenVacationOverview = () => {
    document.getElementById("vacation-message").textContent = currentTexts.alert;
    setTimeout(() => {
      document.getElementById("vacation-message").textContent = "";
    }, 2000);
  };

  return (
    <div className="card-vacation-card">
      <h2>{currentTexts.vacationEntitlement}</h2>
      <p>
        {currentTexts.total}: {vacationData.total} {currentTexts.days}
      </p>
      <p>
        {currentTexts.vacationTaken}: {vacationData.taken} {currentTexts.days}
      </p>
      <p>
        {currentTexts.vacationPlanned}: {vacationData.planned} {currentTexts.days}
      </p>
      <p>
        {currentTexts.remainingVacation}:{" "}
        <span className={vacationData.remaining > 5 ? "positive-vacation" : "negative-vacation"}>
          {vacationData.remaining}
        </span>{" "}
        {currentTexts.days}
      </p>

      <Doughnut data={chartData} />

      {/* ✅ Non-intrusive feedback */}
      <p id="vacation-message" className="vacation-message"></p>

      <button onClick={handleOpenVacationOverview} className="vacation-button" aria-label={currentTexts.button}>
        <i className="ri-navigation-line"></i> {currentTexts.button}
      </button>
    </div>
  );
}

export default VacationCard;
