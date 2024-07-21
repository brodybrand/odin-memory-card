import { useState } from "react";

export default function ScoreBoard() {
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  const handleScoreIncrease = () => {
    setScore((prevScore) => ({
      ...prevScore,
      currentScore: prevScore.currentScore + 1,
    }));
  };
  return (
    <div className="scoreboard">
      <div className="current-score"></div>
    </div>
  );
}
