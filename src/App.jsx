import React, { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AccueilPage from './components/Accueil/AccueilPage';
import ThemesPage from './components/Themes/ThemesPage';
import ResultatsPage from './components/Resultats/ResultatsPage';
import QuizzPage from './components/Quizz/QuizzPage';

function App() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <Switch>
        <Route exact path="/" component={AccueilPage} />
        <Route path="/Themes" component={ThemesPage} />
        <Route path="/Resultats" component={ResultatsPage} />
        <Route path="/Quizz" component={QuizzPage} />
      </Switch>
    </div>
  );
}

export default App;
