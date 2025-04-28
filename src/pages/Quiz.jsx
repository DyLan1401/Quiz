import React, { useState } from "react";
import QuizResult from "../components/QuizResult";
import QuizTime from "../components/QuizTime";
import QuizQuestions from "../components/QuizQuestions";

const Quiz = ({ questions }) => {
  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

//
  const handleAnswer = (index, answer) => {
    setSelectedAnswers({ ...selectAnswers, [index]: answer });
  };

//
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

//
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

//
  const handleTimeUp = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }};

//
  const correctAnswer = questions
    .map((q, i) => (q.correct_answer === selectAnswers[i] ? i + 1 : null))
    .filter((q) => q !== null);

//
  const incorrectAnswer = questions
    .map((q, i) =>
    q.correct_answer !== selectAnswers[i] && selectAnswers[i] ? i + 1 : null)
    .filter((q) => q !== null);

  if (isSubmitted) {
    return (
      <QuizResult
        questions={questions}
        selectAnswers={selectAnswers}
        correctAnswers={correctAnswer}
        incorrectAnswers={incorrectAnswer}
      />
    );}

  return (
//
    <div className="w-[80%] -space-y-4 px-36 flex items-center justify-center flex-col z-20 relative">
      <div className="w-full p-6 space-y-4 bg-neutral-600/20 border border-neutral-100/20 backdrop-blur rounded-lg">
     
     
//
        <QuizTime
          difficulty={questions[currentQuestion].difficulty}
          QuestionCount={questions.length}
          onTimeUp={handleTimeUp}
        />

//
        <QuizQuestions
          question={questions[currentQuestion]}
          index={currentQuestion}
          handleAnswer={handleAnswer}
          selectAnswers={selectAnswers[currentQuestion]}
        />


//
        <button
          className="bg-blue-600 text-neutral-50 text-base font-medium px-8 py-3 rounded-lg hover:bg-blue-700 ease-in-out duration-300"
          onClick={handleNext}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </button>


      </div>
    </div>

  );};

export default Quiz;
