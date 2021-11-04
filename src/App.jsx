/*eslint-disable*/
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
          <Route exact path="/BlindTest/" component={AccueilPage} />
          <Route path="/BlindTest/Themes" component={ThemesPage} />
          <Route path="/BlindTest/Resultats" component={ResultatsPage} />
          <Route path="/BlindTest/Quizz" component={QuizzPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
