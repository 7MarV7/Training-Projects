import ProfileCard from "./ProfileCard";
import TasksCard from "./TasksCard";
import VacationCard from "./VacationCard";
import TimeAccountsCard from "./TimeAccountsCard";
import TerminalCard from "./TerminalCard";
import CalendarCard from "./CalendarCard";
import "../styles/general.css"; // Ensure a dedicated style file for layout

const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  phone: "123-456-7890",
  imageUrl: "https://via.placeholder.com/150",
  office: "Main Office",
  employeeNumber: "12345",
};

// List of dashboard cards (excluding ProfileCard)
const dashboardCards = [
  { component: TasksCard, key: "tasks" },
  { component: VacationCard, key: "vacation" },
  { component: TimeAccountsCard, key: "timeAccounts" },
  { component: TerminalCard, key: "terminal" },
  { component: CalendarCard, key: "calendar" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ProfileCard {...profileData} />
      {dashboardCards.map(({ component: CardComponent, key }) => (
        <CardComponent key={key} />
      ))}
    </div>
  );
};

export default Dashboard;
