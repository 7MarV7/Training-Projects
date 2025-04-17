import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import Dashboard from "./pages/Dashboard";
import ProfileCard from "./pages/cards/ProfileCard";
import TimeAccountsCard from "./pages/cards/TimeAccountsCard";
import TerminalCard from "./pages/cards/TerminalCard";
import CalendarCard from "./pages/cards/CalendarCard";
import TasksCard from "./pages/cards/TasksCard";
import VacationCard from "./pages/cards/VacationCard";
import ActivityTrafficLight from "./pages/cards/ActivityTrafficLight";
import NotFound from "./pages/NotFound"; 

function App() {
  return (
    <Router basename="/">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/startseite" element={<Dashboard />} />
        <Route path="/mitarbeiter" element={<ProfileCard />} />
        <Route path="/zeit" element={<TimeAccountsCard />} />
        <Route path="/anwesenheitsdisplay" element={<TerminalCard />} />
        <Route path="/kalender" element={<CalendarCard />} />
        <Route path="/aufgaben" element={<TasksCard />} />
        <Route path="/urlaub" element={<VacationCard />} />
        <Route path="/ampelkonto" element={<ActivityTrafficLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
