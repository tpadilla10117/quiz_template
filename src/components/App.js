import React, { useState } from 'react';
import {questions} from '../utils/seed';
import './App.css';

function App() {

  const [ currentQuestion, setCurrentQuestion ] = useState(0);

/* Handles state changes when an answer on the quiz (.answer-section) is clicked: */
  const handleAnswerBtnClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>

					<div className='answer-section'>
						{questions[0].answerOptions.map( (answerOption) => (
              <button onClick={handleAnswerBtnClick}>{answerOption.answerText}</button>
            ))}
					</div>

				</>
			)}
		</div>
  );
}

export default App;
