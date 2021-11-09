import React, { useState } from 'react';
import {questions} from '../utils/seed';
import './App.css';

function App() {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ showScore, setShowScore ] = useState(false);
  const [ score, setScore ] = useState(0);

/* Handles state changes when an answer on the quiz (.answer-section) is clicked: */
  const handleAnswerBtnClick = (isCorrect) => {

	if(isCorrect === true) {
		setScore(score + 1);
		/* alert('Correct!') */
	};

    const nextQuestion = currentQuestion + 1;
	if(nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true)
	}
  };

  return (
    <div className='app'>
			{/*Logic to display the score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>

				{/* Button has a click function that passes an argument to handleAnswerBtnClick : */}
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map( (answerOption) => (
              			<button onClick={ () => handleAnswerBtnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            			))}
					</div>

				</>
			)}
		</div>
  );
}

export default App;
