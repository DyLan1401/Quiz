import React, {} from "react";

const QuizQuestions = ({question,index , handleAnswer,selectAnswers}) => {

    return (  
        <div className="p-4 text-neutral-100 text-lg font-bold">
             
            <h2 className="mb-4">
            Q{index+1} :
            <span dangerouslySetInnerHTML={{__html:question.question}}
            />
            </h2>
             
            {question.answers.map((answer,i)=>(
                    <label 
                    key={i}
                    className={`flex h-11 p-3 rounded-lg  items-start  ${selectAnswers === answer? "bg-neutral-400/20 ": ""} hover:bg-neutral-400/20`}
                    >
                         
                        <input
                         type="radio" 
                         name={`question-${index}`}
                         checked={selectAnswers === answer}
                         onChange={()=>handleAnswer(index,answer)}
                         className="mr-2 w-4 h-4 bg-transparent"
                         />

<span dangerouslySetInnerHTML={{__html:answer}} />
                    </label>
            ))}
        </div>
    );
}

export default QuizQuestions;