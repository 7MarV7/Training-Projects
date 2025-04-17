import { useContext } from "react";
import LanguageContext from '../../components/LanguageContext';
import "../styles/general.css";

// Language-specific texts (moved outside the component)
const texts = {
  en: {
    actionAlert: "will be available soon.",
    vacationRequest: "Vacation Request",
    logOvertime: "Log Overtime",
    travelRequest: "Travel Request",
    trainings: "Trainings",
    editProfile: "Edit Profile",
    department: "Department",
    phone: "Phone",
    office: "Office",
    employeeNumber: "Employee Number",
  },
  de: {
    actionAlert: "wird bald verfügbar sein.",
    vacationRequest: "Urlaubsantrag",
    logOvertime: "Überstunden eintragen",
    travelRequest: "Reiseantrag",
    trainings: "Fortbildungen",
    editProfile: "Profil bearbeiten",
    department: "Fachbereich",
    phone: "Telefon",
    office: "Büro",
    employeeNumber: "Mitarbeiternummer",
  },
};

function ProfileCard() {
  const { language } = useContext(LanguageContext);
  const currentTexts = texts[language] || texts.en;

  return (
    <div className="profile-card">
      <h2>{currentTexts.editProfile}</h2>
      <p>{currentTexts.department}: IT</p>
      <p>{currentTexts.phone}: 123-456-7890</p>
      <p>{currentTexts.office}: Room 101</p>
      <p>{currentTexts.employeeNumber}: 001</p>
      <button>{currentTexts.vacationRequest}</button>
      <button>{currentTexts.logOvertime}</button>
      <button>{currentTexts.travelRequest}</button>
      <button>{currentTexts.trainings}</button>
    </div>
  );
}

export default ProfileCard;
