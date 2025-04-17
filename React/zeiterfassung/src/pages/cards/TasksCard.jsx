import { useState, useMemo, useContext } from "react";
import "../styles/general.css";
import LanguageContext from "../../components/LanguageContext";
import LanguageSwitcher from "../../components/LanguageSwitcher.jsx";

// Define texts outside the component for efficiency
const texts = {
  en: {
    myTasks: "My Tasks",
    noTasks: "No open tasks.",
    openTasksOverview: "Open Tasks Overview",
    done: "Done",
    tasks: ["Complete project report", "Meeting at 2:00 PM", "Conduct code review"],
  },
  de: {
    myTasks: "Meine Aufgaben",
    noTasks: "Keine offenen Aufgaben.",
    openTasksOverview: "Aufgabenübersicht öffnen",
    done: "Erledigt",
    tasks: ["Projektbericht abschließen", "Meeting um 14:00 Uhr", "Code-Review durchführen"],
  },
};

export default function TasksCard() {
  const { language } = useContext(LanguageContext);

  // Use useMemo to avoid unnecessary state updates
  const defaultTasks = useMemo(() => texts[language].tasks, [language]);

  const [tasks, setTasks] = useState(defaultTasks);
  const [message, setMessage] = useState(null); // State for user feedback

  const markTaskAsDone = (index) => {
    const taskName = tasks[index];
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setMessage(`${taskName} marked as done`); // Provide feedback
  };

  return (
    <div className="card-tasks-card">
      <LanguageSwitcher />
      <h2>{texts[language].myTasks}</h2>

      {/* Show a confirmation message when a task is marked as done */}
      {message && <p className="task-message">{message}</p>}

      <div className="task-list">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <button
                  onClick={() => markTaskAsDone(index)}
                  aria-label={`${texts[language].done}: ${task}`}
                  className="task-done-button"
                >
                  {texts[language].done}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>{texts[language].noTasks}</p>
        )}
      </div>

      <button
        onClick={() => alert(texts[language].openTasksOverview)}
        aria-label={texts[language].openTasksOverview}
        className="task-overview-button"
      >
        <i className="ri-navigation-line"></i> {texts[language].openTasksOverview}
      </button>
    </div>
  );
}
