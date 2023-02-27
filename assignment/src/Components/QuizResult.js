import React from 'react'
import questions from './QuizData'

const QuizResult = (props) => {
  return (
    <div className='score-section'>
    <h1>Completed!</h1>
    <h4>Total Score:- {props.score}</h4>
    <h4>Your Correct Question {props.correctAns} out of {questions.length}</h4>
    {/* <button>Play Again!</button> */}
    
    </div>
  )
}

export default QuizResult