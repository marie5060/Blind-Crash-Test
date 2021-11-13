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
  const [chosenId, setChosenId] = useState('9626980522');

  console.log(chosenId);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/Blind-Crash-Test/"
            component={() => <AccueilPage setChosenId={setChosenId} />}
          />
          <Route
            path="/Blind-Crash-Test/Themes"
            component={() => <ThemesPage setChosenId={setChosenId} />}
          />
          <Route
            path="/Blind-Crash-Test/Resultats"
            component={() => <ResultatsPage setChosenId={setChosenId} />}
          />
          <Route
            path="/Blind-Crash-Test/Quizz"
            component={() => <QuizzPage chosenId={chosenId} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
