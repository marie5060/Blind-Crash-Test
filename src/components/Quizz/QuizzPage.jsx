/* eslint-disable */
// import LinkBtn from '../Bases/LinkBtn';
import QuizzCard from './QuizzCard';
// import QuizzScore from './QuizzScore';
import './QuizzPage.css';

const QuizzPage = () => {

  // la bonne rep est dans track.title_short
  return (
    <main>
      <h1>Quizz</h1>
      <QuizzCard track={tracks[random]} />
      <div className="quizzBottom">
        {/* <QuizzScore /> */}
        <div className="linkBtnsContainer">
          {/* <LinkBtn />
          <LinkBtn /> */}
        </div>
      </div>
    </main>
  );
};

export default QuizzPage;
