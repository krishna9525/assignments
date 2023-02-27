import React, { useState } from "react";
import questions from "./QuizData";
import QuizResult from "./QuizResult";
import "./Quiz.css"


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);




  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };




  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAns(correctAns + 1);
    }
  };


  
  return (
    <>
      <div className="QuizDiv">
        {showResult ? (
          <QuizResult  score={score} correctAns={correctAns}/>
        ) : (
          <>
            <div className="">
              <h4>Score:{score}</h4>
              <div className="">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <br />
              </div>

              <div className="">
                {questions[currentQuestion].QuestionText}
              </div>
              <br />
            </div>

            <div className="Quizbtn">
              {questions[currentQuestion].answerOption.map((ans, i) => {
                return (
                  <button className="ansbtn"
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                    key={i}
                  >
                    {ans.answerText}
                  </button>
                );
              })}

              <div className="actions">
                <button  onClick={handleNextOption}>Skip</button>
                <button className="" onClick={handleNextOption}>Next</button>
              </div>
            </div>
          </>
        )}

        {/* two button for next and skip */}
      </div>
    </>
  );
};

export default Quiz;
