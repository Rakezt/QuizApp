import React from "react";
import "./Quiz.css";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

interface QuizProps {
  quiz: { question: string; options: string[]; correctOption: number };
  onClickOption(index: number): void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onClickOption }) => {
  return (
    <div>
      <Typography variant="h4">{quiz.question}</Typography>
      <div className="Container">
        <ol>
          {quiz.options.map((option, index) => (
            <li
              key={index}
              className="option"
              onClick={() => onClickOption(index)}
            >
              {option}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Quiz;
