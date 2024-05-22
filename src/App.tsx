import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { quizData } from "./components/data";
import { quizReducer } from "./reducer/reducer";
import { AppState } from "./reducer/reducer.types";

export const initialState: AppState = {
  quizData: quizData,
  currentQuestionIndex: 0,
  score: 0,
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  // const [score, setScore] = useState<number>(0);

  // const checkAnswer = (
  //   selectedOption: number,
  //   correctOption: number
  // ): boolean => {
  //   return selectedOption === correctOption;
  // };

  // const handleOnClick = (selectedOption: number) => {
  //   const currentQuiz = quizData[currentQuestionIndex];
  //   if (checkAnswer(selectedOption, currentQuiz.correctOption)) {
  //     setScore((prevScore) => prevScore + 1);
  //   }
  //   setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  // };

  // const resetButtonHandler = (): void => {
  //   setCurrentQuestionIndex(0);
  //   setScore(0);
  // };

  return (
    <div className="App">
      <Header title={"Welcome to my Quizz App"} />
      {state.currentQuestionIndex < state.quizData.length ? (
        <Quiz
          quiz={quizData[state.currentQuestionIndex]}
          onClickOption={(selectedOption) =>
            dispatch({ type: "ATTEMPTED", selectedOption })
          }
        />
      ) : (
        <Score
          currentScore={state.score}
          totalScore={state.quizData.length}
          resetButton={() => dispatch({ type: "RESET" })}
        />
      )}
    </div>
  );
};

export default App;
