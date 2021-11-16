import { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccueilPage from './components/Accueil/AccueilPage';
import ThemesPage from './components/Themes/ThemesPage';
import ResultatsPage from './components/Resultats/ResultatsPage';
import QuizzPage from './components/Quizz/QuizzPage';
import './App.css';

function App() {
  const [chosenTheme, setChosenTheme] = useState('Rock');
  const [pseudo, setPseudo] = useState('Anonyme');
  const [difficulty, setDifficulty] = useState(2);
  const [chosenId, setChosenId] = useState('9626980522');

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/Blind-Crash-Test/"
            render={(routeProps) => (
              <AccueilPage
                {...routeProps}
                setChosenId={setChosenId}
                setChosenTheme={setChosenTheme}
                setPseudo={setPseudo}
                setDifficulty={setDifficulty}
              />
            )}
          />
          <Route
            path="/Blind-Crash-Test/Themes"
            render={(routeProps) => (
              <ThemesPage
                {...routeProps}
                chosenId={chosenId}
                setChosenId={setChosenId}
                setChosenTheme={setChosenTheme}
                setDifficulty={setDifficulty}
                difficulty={difficulty}
              />
            )}
          />
          <Route
            path="/Blind-Crash-Test/Resultats"
            render={(routeProps) => (
              <ResultatsPage
                {...routeProps}
                pseudo={pseudo}
                difficulty={difficulty}
                setChosenId={setChosenId}
                setChosenTheme={setChosenTheme}
                setDifficulty={setDifficulty}
              />
            )}
          />
          <Route
            path="/Blind-Crash-Test/Quizz"
            component={() => (
              <QuizzPage
                chosenId={chosenId}
                chosenTheme={chosenTheme}
                pseudo={pseudo}
                difficulty={difficulty}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
