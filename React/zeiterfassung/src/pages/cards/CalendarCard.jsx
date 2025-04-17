import { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import LanguageContext from "../../components/LanguageContext";

// Language-specific texts (moved outside the component)
const texts = {
  en: {
    today: "Today is",
    openCalendar: "Open my calendar",
    alert: "My calendar will be opened."
  },
  de: {
    today: "Heute ist der",
    openCalendar: "Meinen Kalender öffnen",
    alert: "Mein Kalender wird geöffnet."
  }
};

export default function CalendarCard() {
  const { language } = useContext(LanguageContext);
  const currentTexts = texts[language] || texts.en;

  const today = new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleOpenCalendar = () => {
    alert(currentTexts.alert);
  };

  return (
    <div className="calendar-card">
      <h2>{currentTexts.today} {today}</h2>
      <Calendar />
      <button onClick={handleOpenCalendar}>{currentTexts.openCalendar}</button>
    </div>
  );
}
