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
        <List>
          {quiz.options.map((option, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => onClickOption(index)}>
                {option}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Quiz;
