import { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccueilPage from './components/Accueil/AccueilPage';
import ThemesPage from './components/Themes/ThemesPage';
import ResultatsPage from './components/Resultats/ResultatsPage';
import QuizzPage from './components/Quizz/QuizzPage';
import './App.css';

function App() {
  const [chosenId, setChosenId] = useState('9626980522');
  const [scoreFinal, setScoreFinal] = useState(0);
  const [pseudo, setPseudo] = useState('Anonyme');
  const [themeName, setThemeName] = useState('Aucun thème');
  const [difficulty, setDifficulty] = useState(2);
  const [quizzResult, setQuizzResult] = useState({});

  useEffect(() => {
    setQuizzResult({
      scoreFinal,
      pseudo,
      themeName,
      difficulty,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/Blind-Crash-Test/"
            component={() => (
              <AccueilPage setChosenId={setChosenId} setPseudo={setPseudo} />
            )}
          />
          <Route
            path="/Blind-Crash-Test/Themes"
            component={() => (
              <ThemesPage
                setChosenId={setChosenId}
                setThemeName={setThemeName}
                setDifficulty={setDifficulty}
              />
            )}
          />
          <Route
            path="/Blind-Crash-Test/Resultats"
            component={() => <ResultatsPage quizzResult={quizzResult} />}
          />
          <Route
            path="/Blind-Crash-Test/Quizz"
            component={() => (
              <QuizzPage chosenId={chosenId} setScoreFinal={setScoreFinal} />
            )}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
