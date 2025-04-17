import { Main } from './pages/main';
import './App.css';
import NewCard from './components/newcard/newcard';

function App() {
  return (
    <>
      <Main />
      <div className="main-card-container">
        <NewCard />
        <NewCard />
      </div>
    </>
  );
}

export default App;
