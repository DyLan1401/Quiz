import React, { useEffect, useState } from "react";

const QuizTime = ({ difficulty, QuestionCount, onTimeUp }) => {
  const getTimeLimit = () => {
    const baseTimes = {
      easy: 2 * 60 + 15,
      medium: 3 * 60,
      hard: 3 * 60 + 45,
    };

    const additionalTimePerQuestion = 20;

    const baseTime = baseTimes[difficulty] || baseTimes.easy;

    if (QuestionCount > 10) {
      const extraTime = (QuestionCount - 10) * additionalTimePerQuestion;
      return baseTime + extraTime;
    }
    return baseTime;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLimit());

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="text-neutral-100 font-medium text-lg flex items-start">
      <p>
        Time Left:
        <span className="font-semibold ml-2">{formatTime(timeLeft)}</span>
      </p>
    </div>
  );
};

export default QuizTime;
