import { Main } from './pages/main';
import { Flashcard } from './components/flashcard/flashcard';
import './App.css';
import NewCard from './components/newcard/newcard';

function App() {
  return (
    <>
      <Main />
      <Flashcard />
      <NewCard />
    </>
  );
}

export default App;
