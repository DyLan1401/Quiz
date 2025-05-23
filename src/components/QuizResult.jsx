import React from "react";

const QuizResult = ({ questions, selectAnswers, correctAnswers, incorrectAnswers }) => {
  const notAttempted = questions.filter((_, i) => !selectAnswers[i]).map((_, i) => i + 1);

  return (
     
    <div className="w-full h-screen py-10 flex items-center justify-center text-neutral-100 z-20">
      <div className="w-[80%] h-full flex justify-center flex-col space-y-3 p-4
       bg-neutral-600/20 border border-neutral-100/20 backdrop-blur rounded-xl overflow-hidden">

        
        <h1 className="text-2xl text-neutral-50 font-bold">Quiz Results</h1>

 
        <div className="w-full flex items-center gap-6 border-b p-4 border-neutral-100/20">
         
          <h2 className="text-lg tracking-wider font-bold">Quiz Summary:</h2>
           
          <p className="flex items-center my-0 gap-x-2 bg-green-700 px-3 py-0.5 rounded-lg">
            Total Correct: <span className="font-bold">{correctAnswers.join(",")} </span>
          </p>
           
          <p className="flex items-center my-0 gap-x-2 bg-red-700 px-3 py-0.5 rounded-lg">
            Total Incorrect: <span className="font-bold">{incorrectAnswers.join(",")}</span>
          </p>
           
          {notAttempted.length > 0 && 
          (
            <p className="flex items-center my-0 gap-x-2 bg-neutral-800/60 px-3 py-0.5 rounded-lg">
              Total Not Attempted: 
              <span className="font-bold">{notAttempted.length} ({notAttempted.join(" , ")})</span>
            </p>
          )
          }

        </div>

 
        <h2 className="text-lg font-bold mb-2">Review Questions:</h2>

        <div className="grid grid-cols-3 gap-6 overflow-y-auto flex-1 pr-4">
          {questions.map((q, index) => 
          ( 
           <div
              key={index}
              className="w-full p-4 space-y-2 rounded-xl bg-neutral-700/5 border border-neutral-100/30 hover:bg-neutral-800/10"
              aria-labelledby={`question-${index}`}
            >
               
              <p className="font-bold">
                Q{index + 1}: <span dangerouslySetInnerHTML={{ __html: q.question}} />
              </p>
               
              <p className="font-bold">
                Your Answer:{" "}
                <span className="" dangerouslySetInnerHTML={{ __html: selectAnswers[index] || "Not Attempted" }} />
              </p>
               
              <p className="font-bold">
                Correct Answer:{" "}
                <span dangerouslySetInnerHTML={{ __html: q.correct_answer}} />
              </p>

            </div>
          ))}

        </div>

         
      </div>
    </div>
  )
}
export default QuizResult;
