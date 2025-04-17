import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LanguageContext from "../../components/LanguageContext";
import "../styles/navigation.css";

const navItems = [
  { path: "/startseite", key: "Startseite", icon: "ri-home-line", en: "Home", de: "Startseite" },
  { path: "/mitarbeiter", key: "Mitarbeiter", icon: "ri-user-line", en: "Employee", de: "Mitarbeiter" },
  { path: "/zeit", key: "Zeit", icon: "ri-time-line", en: "Time", de: "Zeit" },
  { path: "/anwesenheitsdisplay", key: "Anwesenheitsdisplay", icon: "ri-dashboard-line", en: "Presence", de: "Anwesenheitsdisplay" },
  { path: "/kalender", key: "Kalender", icon: "ri-calendar-line", en: "Calendar", de: "Kalender" },
  { path: "/aufgaben", key: "Aufgaben", icon: "ri-task-line", en: "Tasks", de: "Aufgaben" },
  { path: "/ampelkonto", key: "Ampelkonto", icon: "ri-traffic-light-line", en: "TLA", de: "Ampelkonto" },
  { path: "/urlaub", key: "Urlaub", icon: "ri-suitcase-line", en: "Vacation", de: "Urlaub" },
];

function Navigation() {
  const { language } = useContext(LanguageContext);

  return (
    <nav className="nav">
      {navItems.map(({ path, key, icon, en, de }) => (
        <NavLink
          key={key}
          to={path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className={icon}></i> <span>{language === "de" ? de : en}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
