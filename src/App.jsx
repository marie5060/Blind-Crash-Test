import React from 'react';
import AppelApi from './components/Quizz/AppelApi';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <AppelApi />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
