import { Link } from 'react-router-dom';
import './linkBtnGoQuizz.css';

const LinkBtnGoQuizz = () => {
  return (
    <div>
      <Link to="/Blind-Crash-Test/Quizz">
        <button type="button" className="go-quiz">
          Lancer le Quizz !
        </button>
      </Link>
    </div>
  );
};

export default LinkBtnGoQuizz;
