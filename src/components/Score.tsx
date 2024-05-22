import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Button } from "@mui/material";
import React from "react";
import "./Score.css";

interface ScoreProps {
  currentScore: number;
  totalScore: number;
  resetButton: () => void;
}
const Score: React.FC<ScoreProps> = ({
  currentScore,
  totalScore,
  resetButton,
}) => {
  return (
    <div className="container">
      <Button variant="contained" onClick={resetButton}>
        Play Again
      </Button>
      <div className="trophy">
        <div>
          <EmojiEventsIcon sx={{ fontSize: 100 }} />
        </div>
        You have scored {currentScore} out of {totalScore} marks
      </div>
    </div>
  );
};

export default Score;
