import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppelApi from './components/Quizz/AppelApi';
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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={AccueilPage} />
          <Route path="/Themes" component={ThemesPage} />
          <Route path="/Resultats" component={ResultatsPage} />
          <Route path="/Quizz" component={QuizzPage} />
        </Switch>
        <AppelApi />
      </BrowserRouter>
    </div>
  );
}

export default App;
