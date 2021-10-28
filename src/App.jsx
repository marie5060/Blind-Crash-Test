import React from 'react';
import AppelApi from './components/Quizz/AppelApi';
import './App.css';
import Header from './components/Header/Header';
import QuizzPage from './components/Quizz/QuizzPage';

function App() {
  return (
    <div>
      <Header />
      <QuizzPage />
      <AppelApi />
    </div>
  );
}

export default App;
