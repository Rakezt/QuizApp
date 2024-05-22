import { initialState } from "../App";
import { AppState, QuizAction } from "./reducer.types";

const getNextQuestionIndex = (
  currentIndex: number,
  totalQuestion: number
): number => {
  return currentIndex + 1 <= totalQuestion ? currentIndex + 1 : currentIndex;
};

const checkAnswer = (
  selectedOption: number,
  correctOption: number
): boolean => {
  return selectedOption === correctOption;
};

export const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case "ATTEMPTED":
      const nextQuestionIndex = getNextQuestionIndex(
        state.currentQuestionIndex,
        state.quizData.length
      );
      const updateScore = checkAnswer(
        action.selectedOption,
        state.quizData[state.currentQuestionIndex].correctOption
      )
        ? state.score + 1
        : state.score;
      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        score: updateScore,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
