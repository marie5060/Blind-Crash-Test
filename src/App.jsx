import React from 'react';
import AppelApi from './components/Quizz/AppelApi';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

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
